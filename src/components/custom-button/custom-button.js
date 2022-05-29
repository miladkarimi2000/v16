import React from 'react';
import './custom-button.scss';

const CustomButton = ({ children, ...restProps }) => (
    <button className='custom-button' {...restProps}>
        {children}
    </button>
);

export default CustomButton;