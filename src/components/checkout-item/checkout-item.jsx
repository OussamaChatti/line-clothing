import React from 'react';
import {connect} from 'react-redux';

import {clearItemFromCart,addItem,removeItem} from '../../redux/cart/cart.actions';

import { CheckoutItemContainer,ImageContainer,NameContainer,QuantityContainer,Arrow,ValueContainer,PriceContainer,RemoveButton } from './checkout-item.styles';

const CheckoutItem = ({cartItem,clearItem,addItem,removeItem}) => {
    const {name,imageUrl,price,quantity} = cartItem;
    return(
    <CheckoutItemContainer> 
        <ImageContainer>
            <img alt='item' src={imageUrl}/>
        </ImageContainer>
        <NameContainer>{name}</NameContainer>
        <QuantityContainer>
            <Arrow onClick={() => removeItem(cartItem)}>&#10092;</Arrow>
            <ValueContainer>{quantity}</ValueContainer>
            <Arrow onClick={() => addItem(cartItem)}>&#10093;</Arrow>
        </QuantityContainer>
        <PriceContainer>{price} TND</PriceContainer>
        <RemoveButton onClick={() => clearItem(cartItem)}>&#10008;</RemoveButton>
    </CheckoutItemContainer>
);
}

const mapDispatchToProps = dispatch => ({
clearItem : item => dispatch(clearItemFromCart(item)),
addItem : item => dispatch(addItem(item)),
removeItem : item => dispatch(removeItem(item))
})

export default connect(null,mapDispatchToProps)(CheckoutItem);