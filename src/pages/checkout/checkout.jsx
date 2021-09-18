import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button';

import { selectCartItems,selectCartTotal} from '../../redux/cart/cart.selectors';

import './checkout.scss';

const CheckoutPage = ({cartItems,total}) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)
        }
        <div className='total'>
            <span>TOTAL: {total} TND</span>
        </div>
        <StripeCheckoutButton price={total}/>
        <div className='test-warning'>
            This button is just for testing purposes please do not enter your real credit card informations
            <br/><br/> Use the following test card numbers for payments :<br/>
            <pre>NUMBER: 4242424242424242 - BRAND: Visa - CVC: Any 3 digits - EXP-DATE: Any future date</pre>
        </div>
    </div>
);
const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems,
    total : selectCartTotal
});
export default connect(mapStateToProps)(CheckoutPage);