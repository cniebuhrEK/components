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
  /**
   * Button children
   */
  children: PropTypes.string,
  /**
   * onClick event
   */
  onClick: PropTypes.func,
  /**
   * one of 'normal', 'small', 'large'
   */
  size: PropTypes.oneOf(['normal', 'small', 'large']),
  /**
   * one of 'primary', 'secondary', 'tertiary'
   */
  color: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  /**
   * one of 'contained', 'outlined'
   */
  variant: PropTypes.oneOf(['contained', 'outlined']),
  /**
   * Icon that is rendered on the left
   */
  startIcon: PropTypes.string,
  /**
   * type (string) of button tag
   */
  type: PropTypes.string,
  /**
   * disabled boolean
   */
  disabled: PropTypes.bool,
  /**
   * autoFocus boolean
   */
  autoFocus: PropTypes.bool
};

Button.defaultProps = {
  disabled: false,
  type: 'button',
  size: 'normal',
  variant: 'contained',
  color: 'primary'
};
