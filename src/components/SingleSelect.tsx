import React from 'react'
import Select from 'react-select'
import { CustomInput, REACT_SELECT_STYLES, SELECT_SIZES } from '../utils/reactSelect'

const customComponents = {
  Input: CustomInput
}

interface SingleSelectProps {
  required?: boolean
  options: { label: string; value: string | number | boolean }[]
  label: string
  error?: boolean
  errorText?: string
  disabled?: boolean
  size?: string
  [x: string]: any
}

export const SingleSelect = (props: SingleSelectProps): JSX.Element => {
  const { required, options, label, error, errorText, disabled, size } = props

  return (
    <Select
      {...props}
      required={required}
      styles={REACT_SELECT_STYLES}
      components={customComponents}
      options={options}
      label={label}
      error={error}
      errorText={errorText}
      isDisabled={disabled}
      size={size}
    />
  )
}

SingleSelect.defaultProps = {
  required: false,
  isSearchable: true,
  options: [],
  onBlur: () => {},
  onFocus: () => {},
  label: '',
  error: false,
  errorText: '',
  size: SELECT_SIZES.normal
}

export default SingleSelect
