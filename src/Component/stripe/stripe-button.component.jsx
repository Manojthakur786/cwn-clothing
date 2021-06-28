import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton=({price})=>{
    const stripePrice=price*100;
    const publishableKey='pk_test_51J7JNZSCS7cPpd0X3KbIRAnJwFyDeEvxjmdKQBfAtSChBftzXFkAUlJfLisWYPVUJswaSCDEbcpq227tD4ByK9u300BaBCNuXu';
    
     const OnToken=token=>{
         console.log(token);
         alert('Payment Successful');
     }

        return(
            <StripeCheckout
            label='Pay Now'
            name='Manoj Website.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is ${price}`}
            amount={stripePrice}
            panelLabel='Pay Now'
            allowRememberMe
            token={OnToken}
            stripeKey={publishableKey}
            />
        );
};
export default StripeCheckoutButton;