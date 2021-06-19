import React from 'react';
import CustomButton from '../custom-button/custom-button';
import './cart-dropdown.style.scss';
import {connect} from 'react-redux';
import CartItem from '../cart-item/cart-item.component';
const CartDropdown=({cartItems})=>(
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.map(cartItem=>(
                <CartItem key={cartItem.id} item={cartItem} />)
                )}
            </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>

    </div>
)
const mapStatetoProps=({cart:{cartItems}})=>({
    cartItems
});
export default connect(mapStatetoProps)(CartDropdown);