import React,{lazy, useEffect,Suspense} from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import {selectCurrentUser} from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

import Header from './components/header/header.jsx';
import Spinner from './components/loading-spinner/loading-spinner';
import ErrorBoundary from './components/error-boundary/error-boundary';

import { GlobalStyle } from './global.styles';

const HomePage = lazy(() => import('./pages/homepage/homepage.jsx'));
const ShopPage = lazy(() => import('./pages/shop/shop.jsx'));
const SignInSignUp = lazy(() => import('./pages/sign-in-sign-up/sign-in-sign-up.jsx'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkout'));
const AboutPage = lazy(() => import('./pages/about/about.jsx'));

const App = ({checkUserSession,currentUser}) => {
  useEffect(() => {
    checkUserSession();
  },[checkUserSession]);
  
  return (
  <div >
    <GlobalStyle/>
      <Header/>
      <Switch>
        <ErrorBoundary>
        <Suspense fallback={<Spinner/>}>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route exact path='/signin' render={() => currentUser ?(<Redirect to='/'></Redirect>):(<SignInSignUp></SignInSignUp>)} />
          <Route exact path='/checkout' component={CheckoutPage}/>
          <Route exact path='/about' component={AboutPage}/>
        </Suspense>
        </ErrorBoundary>
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
