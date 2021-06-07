import React from 'react'
import PropTypes from 'prop-types'

import { InputField as InputComponent } from 'components'

/**
 * Primary UI component for user interaction
 */
export const Input = props => {
  return <InputComponent {...props} />
}

Input.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
  /**
   * onChange handler, it takes "name" and a new "value" as arguments
   */
  onChange: PropTypes.func,
  /**
   * validation handler, sets the component error state, takes name as arguments and a validation function returning information whether the field is valid and the error key to be displayed
   */
  validate: PropTypes.func,
  label: PropTypes.string,
  value: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  /**
   * if true, changes the value into initialValue
   */
  reset: PropTypes.bool,
  /**
   * translation handler, passed from i18n to translate the error key
   */
  t: PropTypes.func
}

Input.defaultProps = {
  name: 'test',
  id: 'test',
  type: 'text',
  onChange: (name, value) => {},
  validate: (name, validationFunc) => {},
  label: 'Test',
  value: '',
  required: true,
  disabled: false,
  reset: false,
  t: (key, options) => {}
}