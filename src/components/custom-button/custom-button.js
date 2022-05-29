import React from 'react';
import './custom-button.scss';

const CustomButton = ({ children, isGoogleSignIn, ...restProps }) => (
    <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...restProps}>
        {children}
    </button>
);

export default CustomButton;