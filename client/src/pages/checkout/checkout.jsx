import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button';

import { selectCartItems,selectCartTotal} from '../../redux/cart/cart.selectors';

import { CheckoutPageContainer,CheckoutHeader,HeaderBlock,TotalContainer,TestWarning } from './checkout.styles';

const CheckoutPage = ({cartItems,total}) => (
    <CheckoutPageContainer>
        <CheckoutHeader>
            <HeaderBlock>
                <span>Product</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Description</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Quantity</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Price</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Remove</span>
            </HeaderBlock>
        </CheckoutHeader>
        {
            cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)
        }
        <TotalContainer>
            <span>TOTAL: {total} TND</span>
        </TotalContainer>
        <StripeCheckoutButton price={total}/>
        <TestWarning>
            This button is just for testing purposes please do not enter your real credit card informations
            <br/><br/> Use the following test card numbers for payments :<br/>
            <pre>NUMBER: 4242424242424242 - BRAND: Visa - CVC: Any 3 digits - EXP-DATE: Any future date</pre>
        </TestWarning>
    </CheckoutPageContainer>
);
const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems,
    total : selectCartTotal
});
export default connect(mapStateToProps)(CheckoutPage);