import React, { FC } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

interface ButtonProps {
  children: React.ReactNode;
  [key: string]: any;
  className?: string;
  size?: ButtonSize;
}

export enum ButtonSize {
  Small = "small",
  Default = "default",
  Big = "big",
}

const sizeCollection = {
  [ButtonSize.Small]: "px-[8px] py-[4px]",
  [ButtonSize.Default]: "px-[16px] py-[8px]",
  [ButtonSize.Big]: "px-[32px] py-[16px]",
};

const Button: FC<ButtonProps> = ({ children, className, size = ButtonSize.Default }) => {
  const buttonClass = classNames(
    className,
    sizeCollection[size],
    'bg-accent',
    'rounded-full'
  );

  return (
    <button className={buttonClass}>{children}</button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  size: PropTypes.oneOf(Object.values(ButtonSize)),
};

export default Button;
