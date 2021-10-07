import React,{useEffect} from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import {selectCurrentUser} from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

import HomePage from './pages/homepage/homepage.jsx';
import ShopPage from './pages/shop/shop.jsx';
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up.jsx';
import CheckoutPage from './pages/checkout/checkout';
import AboutPage from './pages/about/about.jsx';
import Header from './components/header/header.jsx';

import { GlobalStyle } from './global.styles';

const App = ({checkUserSession,currentUser}) => {
  useEffect(() => {
    checkUserSession();
  },[checkUserSession]);
  
  return (
  <div >
    <GlobalStyle/>
      <Header/>
      <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route exact path='/signin' render={() => currentUser ?(<Redirect to='/'></Redirect>):(<SignInSignUp></SignInSignUp>)} />
          <Route exact path='/checkout' component={CheckoutPage}/>
          <Route exact path='/about' component={AboutPage}/>
      </Switch>
  </div>
);
}

const mapStateToProps = createStructuredSelector({
  currentUser : selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
