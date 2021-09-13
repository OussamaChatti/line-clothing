import React  from 'react';
import './header.scss';
import {Link} from 'react-router-dom';
import mainLogo from '../../assets/logo.png';
import {auth} from '../../firebase/firebase.utils.js';
import {connect} from 'react-redux';
import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown'; 


const Header = ({currentUser,hidden}) =>
(
<div className='header'>
    <Link to='/' className='logo-container'>
        <img src={mainLogo} alt='logo' className='logo'/>
    </Link>
    <div className='options'>
        <Link to='/shop' className='option'>SHOP</Link>
        {
            currentUser?
            <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
            :
            <Link to='/signin' className='option'>SIGN IN</Link>
        }
        <Link to='/contact' className='option'>CONTACT</Link>
        <CartIcon/>
    </div>
    {hidden?null:<CartDropdown/>}
</div>
);

const mapStateToProps = ({user : {currentUser}, cart : {hidden}}) => ({
currentUser,
hidden
});

export default connect(mapStateToProps)(Header);
