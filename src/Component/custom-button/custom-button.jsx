import React from 'react';
import './custom-button.scss';
const CustomButton=({children,isGoogleSignIn,inverted,...otherprops})=>(
    <button 
    className={`${inverted ?'inverted':''}
    ${
        isGoogleSignIn?'google-sing-in':''
    }
    custom-button`} 
    {...otherprops}>
         {children}
    </button>
)
export default CustomButton;