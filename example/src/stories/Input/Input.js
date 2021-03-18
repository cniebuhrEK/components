import React from 'react';
import PropTypes from 'prop-types';

import { Input as InputComponent } from 'components'

/**
 * Primary UI component for user interaction
 */
export const Input = props => {
  return (
    <InputComponent {...props} />
  );
};

Input.propTypes = {
  /**
   * Input label
   */
  label: PropTypes.string,
  /**
   * required boolean, adds * next to the label
   */
  required: PropTypes.bool,
  /**
   * disabled boolean
   */
  disabled: PropTypes.bool,
  /**
   * type (string) of input tag
   */
  type: PropTypes.string,
  /**
   * value of the input
   */
  value: PropTypes.string,
  /**
   * changes the styles if input has an error
   */
  error: PropTypes.bool,
  /**
   * displays error text under the input
   */
  errorText: PropTypes.string,
  /**
   * passes props to input tag
   */
  inputProps: PropTypes.object,
  /**
   * passes ref to input tag
   */
  inputRef: PropTypes.any,
  /**
   * onChange handler
   */
  onChange: PropTypes.func,
  /**
   * onBlur handler
   */
  onBlur: PropTypes.func,
  /**
   * onFocus handler
   */
  onFocus: PropTypes.func
};

Input.defaultProps = {
  label: 'Test',
  required: false,
  disabled: false,
  type: 'text',
  autoComplete: 'false',
  autoFocus: false,
  onChange: () => {},
  onFocus: () => {},
  onBlur: () => {},
  inputProps: {}
};
