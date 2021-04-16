import React from 'react';
import PropTypes from 'prop-types';

import { Button as ButtonComponent } from 'components'

/**
 * Primary UI component for user interaction
 */
export const Button = props => {
  return (
    <ButtonComponent {...props}>{props.children}</ButtonComponent>
  );
};

Button.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['normal', 'small']),
  color: PropTypes.oneOf(['orange', 'green', 'transparent']),
  variant: PropTypes.oneOf(['contained', 'outlined']),
  startIcon: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  autoFocus: PropTypes.bool
};

Button.defaultProps = {
  disabled: false,
  loading: false,
  type: 'button',
  size: 'normal',
  variant: 'contained',
  color: 'orange'
};
