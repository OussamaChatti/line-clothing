import React  from 'react';
import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';

import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';

import mainLogo from '../../assets/logo.png';
import {auth} from '../../firebase/firebase.utils.js';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import {HeaderContainer,LogoContainer,Logo,OptionsContainer,OptionLink} from './header.styles';

const Header = ({currentUser,hidden}) =>
(
<HeaderContainer>
    <LogoContainer to='/'>
        <Logo src={mainLogo} alt='logo'/>
    </LogoContainer>
    <OptionsContainer>
        <OptionLink to='/shop'>SHOP</OptionLink>
        {
            currentUser?
            <OptionLink as='div' onClick={() => auth.signOut()}>SIGN OUT</OptionLink>
            :
            <OptionLink to='/signin'>SIGN IN</OptionLink>
        }
        <OptionLink to='/about'>CONTACT</OptionLink>
        <CartIcon/>
    </OptionsContainer>
    {hidden?null:<CartDropdown/>}
</HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
currentUser : selectCurrentUser,
hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
