import React from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import {auth,createUserProfileDocument} from './firebase/firebase.utils.js';
import {setCurrentUser} from './redux/user/user.actions';
import {selectCurrentUser} from './redux/user/user.selectors';

import HomePage from './pages/homepage/homepage.jsx';
import ShopPage from './pages/shop/shop.jsx';
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up.jsx';
import CheckoutPage from './pages/checkout/checkout';
import Header from './components/header/header.jsx';

import './App.css';

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
        <Header/>
        <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route path='/shop' component={ShopPage}/>
            <Route exact path='/signin' render={() => this.props.currentUser ?(<Redirect to='/'></Redirect>):(<SignInSignUp></SignInSignUp>)} />
            <Route exact path='/checkout' component={CheckoutPage}/>
        </Switch>
    </div>
  );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser : selectCurrentUser
  })

const mapDispatchToPros = dispatch => ({
setCurrentUser : user => dispatch(setCurrentUser(user)) 
});

export default connect(mapStateToProps,mapDispatchToPros)(App);
