import './App.css';
import HomePage from './pages/homepage/homepage.jsx';
import {Switch,Route} from 'react-router-dom';
import ShopPage from './pages/shop/shop.jsx';
import Header from './components/header/header.jsx';
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up.jsx';

function App() {
    return (
    <div >
        <Header/>
        <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route path='/shop' component={ShopPage}/>
            <Route exact path='/signin' component={SignInSignUp}/>
        </Switch>
    </div>
  );
}

export default App;
