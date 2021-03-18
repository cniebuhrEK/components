import React from 'react';
import PropTypes from 'prop-types';

import { SingleSelect as SingleSelectComponent } from 'components'

/**
 * Primary UI component for user interaction
 */
export const SingleSelect = props => {
  return (
    <SingleSelectComponent {...props} />
  );
};

SingleSelect.propTypes = {
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
  error: PropTypes.bool,
  /**
   * displays error text under the input
   */
  errorText: PropTypes.string,
  /**
   * passes props to input tag
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

SingleSelect.defaultProps = {
  required: false,
  isSearchable: true,
  options: [
    {label: 'Option 1', value: 'option-1'},
    {label: 'Option 2', value: 'option-2'},
    {label: 'Option 3', value: 'option-3'},
  ],
  onBlur: () => {},
  onFocus: () => {},
  onChange: () => {},
  label: '',
  error: false,
  errorText: '',
};

