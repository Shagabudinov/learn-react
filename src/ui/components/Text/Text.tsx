import React, { FC } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

interface TextSettingsProps {
  bold?: string;
  isItalic?: boolean;
  isUnderLine?: boolean;
}

interface TextProps extends TextSettingsProps {
  children: React.ReactNode;
  [key: string]: any;
  className?: string;
}

const Text: FC<TextProps> = ({ children, className, bold, isItalic, isUnderLine }) => {
  const getTextClasses = () => {
    let classes = '';
    classes += `text-white ${className}`;
    return classes
  }
  return (
    <p className={classNames(getTextClasses())}>
      {children}
    </p>
  )
}

Text.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  bold: PropTypes.string,
  isItalic: PropTypes.bool,
  isUnderLine: PropTypes.bool,
};

export default Text;
