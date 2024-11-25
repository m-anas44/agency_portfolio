import React from 'react';

const Button = ({ children, type = 'button', bgColor = 'bg-primary', className = '', ...props }) => {
  return (
    <button className={`px-5 py-3  font-medium text-secondary hover:scale-105 duration-300  ${bgColor}  ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
