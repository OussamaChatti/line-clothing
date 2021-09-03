import React  from 'react';
import './header.scss';
import {Link} from 'react-router-dom';
import mainLogo from '../../assets/logo/logo.png';
import {auth} from '../../firebase/firebase.utils.js';


const Header = (props) =>
(
<div className='header'>
    <Link to='/' className='logo-container'>
        <img src={mainLogo} alt='logo' className='logo'/>
    </Link>
    <div className='options'>
        <Link to='/shop' className='option'>SHOP</Link>
        {
            props.currentUser?
            <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
            :
            <Link to='/signin' className='option'>SIGN IN</Link>
        }
        <Link to='/contact' className='option'>CONTACT</Link>
    </div>
</div>
);

export default Header;
