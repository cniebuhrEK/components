import React from 'react'
import Select from 'react-select'
import { CustomInput, REACT_SELECT_STYLES } from '../utils/reactSelect'

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
  [x: string]: any
}

export const SingleSelect = (props: SingleSelectProps): JSX.Element => {
  const { required, options, label, error, errorText, disabled } = props

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
}

export default SingleSelect
