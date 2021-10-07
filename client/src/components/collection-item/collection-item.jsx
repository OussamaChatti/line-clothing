import React from 'react';
import {connect} from 'react-redux';

import {addItem} from '../../redux/cart/cart.actions';

import { ImageContainer,CollectionItemContainer, CollectionFooterContainer, NameContainer,PriceContainer,CustomButtonStyled } from './collection-item.styles';

const CollectionItem = ({item,addItem}) => {
    const {name,price,imageUrl} = item;
return (
    <CollectionItemContainer>
        <ImageContainer style={{ backgroundImage: `url(${imageUrl})` }}/>
        <CollectionFooterContainer>
            <NameContainer>{name}</NameContainer>
            <PriceContainer>{price}</PriceContainer>
        </CollectionFooterContainer>
        <CustomButtonStyled onClick={() => addItem(item)} inverted> Add to cart</CustomButtonStyled>
    </CollectionItemContainer>
    );}

const mapDispatchToProps = dispatch => ({
    addItem : item => dispatch(addItem(item))
})

export default connect(null,mapDispatchToProps)(CollectionItem);
