import React from 'react';
import PropTypes from 'prop-types';
import getIcon from './getIcon';

const Icon = ({ name, ...otherProps }) => {
  return <>{getIcon(name, { ...otherProps })}</>;
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Icon;