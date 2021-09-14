import React  from 'react';
import {Link} from 'react-router-dom';
import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';

import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';

import mainLogo from '../../assets/logo.png';
import {auth} from '../../firebase/firebase.utils.js';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import './header.scss';

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

const mapStateToProps = createStructuredSelector({
currentUser : selectCurrentUser,
hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
