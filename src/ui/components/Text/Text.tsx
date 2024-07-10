import React, { FC } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

interface TextSettingsProps {
  bold?: string;
  isItalic?: boolean;
  isUnderLine?: boolean;
}

interface TextProps extends TextSettingsProps {
  children: any;
  [key: string]: any;
  className?: string;
}

const Text: FC<TextProps> = ({
  children,
  className,
  bold,
  isItalic,
  isUnderLine,
}) => {
  const getTextClasses = () => {
    let classes = 'text-white block';
    if (className) classes += ` ${className}`;
    if (bold) classes += ` font-${bold}`;
    if (isItalic) classes += ' italic';
    if (isUnderLine) classes += ' underline';
    return classes;
  };

  return <p className={classNames(getTextClasses())}>{children}</p>;
};

Text.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  bold: PropTypes.string,
  isItalic: PropTypes.bool,
  isUnderLine: PropTypes.bool,
};

export default Text;
