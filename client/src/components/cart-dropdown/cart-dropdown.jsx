import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router';

import CartItem from '../cart-item/cart-item';

import {selectCartItems} from '../../redux/cart/cart.selectors';
import {toggleCartHidden} from '../../redux/cart/cart.actions';

import { CartDropdownContainer,CartItemsContainer,EmptyMessage,CustomButtonStyled } from './cart-dropdown.styles';

const CartDropdown = ({cartItems,history,dispatch}) => (
    <CartDropdownContainer>
        <CartItemsContainer>
            {
                cartItems.length?
                (cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)):
                (<EmptyMessage>Your cart is empty</EmptyMessage>)
            }
        </CartItemsContainer>
        <CustomButtonStyled onClick={() => {history.push('/checkout');dispatch(toggleCartHidden())}}>GO TO CHECKOUT</CustomButtonStyled>
    </CartDropdownContainer>
);

const mapStateToProps =createStructuredSelector({
    cartItems : selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));