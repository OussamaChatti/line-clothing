import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const key = 'pk_test_51Jb77KDLs29oJKLuZ0H5ZGJ5k7wuBrVgYpbWKKto5RaAQXPs04rlsUQHrP2tDY7BURvE0zpLYzVqwSXrcFfl3pWr00KqJhF7Ry';
    const onToken = token => {
        alert('Payment Successful');
    }
    return (
        <StripeCheckout
        label='Pay Now'
        name='Line Clothing'
        billingAddress
        shippingAddress
        image='https://i.ibb.co/JqRxjps/logo-preview.jpg'
        description={`Your total is ${price} TND`}
        amount={priceForStripe}
        panelLabel='Pay now'
        token={onToken}
        stripeKey={key}
        /> 
    );
}

export default StripeCheckoutButton;