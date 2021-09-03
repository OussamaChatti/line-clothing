import './App.css';
import React from 'react';
import HomePage from './pages/homepage/homepage.jsx';
import {Switch,Route} from 'react-router-dom';
import ShopPage from './pages/shop/shop.jsx';
import Header from './components/header/header.jsx';
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up.jsx';
import {auth,createUserProfileDocument} from './firebase/firebase.utils.js';


class App extends React.Component {
  constructor(){
    super();
    this.state={
        currentUser : null
    };
  }

  unsubscribeFromAuth = null;

 componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        console.log(this.state);
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render(){
    return (
    <div >
        <Header currentUser={this.state.currentUser}/>
        <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route path='/shop' component={ShopPage}/>
            <Route exact path='/signin' component={SignInSignUp}/>
        </Switch>
    </div>
  );
  }
}

export default App;
