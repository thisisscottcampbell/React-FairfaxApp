import React from 'react';
import '../button/Button.scss';

const Button = ({ children, ...otherProps }) => (
  <button className='custom-button' {...otherProps}>
    {children}
  </button>
);

export default Button;