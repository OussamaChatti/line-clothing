import './App.css';
import React from 'react';
import HomePage from './pages/homepage/homepage.jsx';
import {Switch,Route} from 'react-router-dom';
import ShopPage from './pages/shop/shop.jsx';
import Header from './components/header/header.jsx';
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up.jsx';
import {auth,createUserProfileDocument} from './firebase/firebase.utils.js';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.action';


class App extends React.Component {

  unsubscribeFromAuth = null;

 componentDidMount() {
   const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          });
//        console.log(this.state);
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render(){
    return (
    <div >
        <Header />
        <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route path='/shop' component={ShopPage}/>
            <Route exact path='/signin' component={SignInSignUp}/>
        </Switch>
    </div>
  );
  }
}

const mapDispatchToPros = dispatch => ({
setCurrentUser : user => dispatch(setCurrentUser(user)) 
});

export default connect(null,mapDispatchToPros)(App);
