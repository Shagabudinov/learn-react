import React, { FC } from 'react';
import PropTypes from 'prop-types';

interface ButtonProps {
  children: React.ReactNode;
  [key: string]: any;
  className?: string;
}

const Button: FC<ButtonProps> = ({ children, className }) => {
  console.log(children)
  return (
    <button className={`${className} px-[32px] py-[16px] bg-accent rounded-full`}>{ children }</button>
  )
}

export default Button