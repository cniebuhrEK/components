// SingleSelect/SingleSelect.tsx - Single select field component

import React from 'react'
import Select from 'react-select'
import {
  CustomInput,
  CustomValueContainer,
  REACT_SELECT_STYLES,
  SELECT_SIZES
} from '../../utils/reactSelect'

const customComponents = {
  Input: CustomInput,
  ValueContainer: CustomValueContainer
}

interface SingleSelectProps {
  required?: boolean
  options: { label: string; value: string | number | boolean }[]
  label: string
  error?: boolean
  errorText?: string
  disabled?: boolean
  size?: 'normal' | 'small'
  [x: string]: any
}

const SingleSelect = (props: SingleSelectProps): JSX.Element => {
  const { disabled } = props

  return (
    <Select
      {...props}
      styles={REACT_SELECT_STYLES}
      components={customComponents}
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
  disabled: false,
  errorText: '',
  size: SELECT_SIZES.normal
}

export default SingleSelect
