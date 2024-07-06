import React, { FC } from 'react';
import PropTypes from 'prop-types';

interface ButtonProps {
  children: React.ReactNode;
  [key: string]: any;
  className?: string;
}

enum ButtonType {
    Small = "small",
    Default = "default",
    Big = "big",
}

const Button: FC<ButtonProps> = ({ children, className }) => {
  return (
    <button className={`${className} px-[32px] py-[16px] bg-accent rounded-full`}>{ children }</button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
}

export default Button