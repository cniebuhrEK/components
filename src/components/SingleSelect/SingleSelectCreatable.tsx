// SingleSelectCreatable/SingleSelectCreatable.tsx - Single select field component

import React from 'react'
import Creatable from 'react-select/creatable'
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

interface SingleSelectCreatableProps {
  required?: boolean
  options: { label: string; value: string | number | boolean }[]
  label: string
  error?: boolean
  errorText?: string
  disabled?: boolean
  size?: 'normal' | 'small'
  [x: string]: any
}

const SingleSelectCreatable = (
  props: SingleSelectCreatableProps
): JSX.Element => {
  const { disabled, options, label } = props

  return (
    <Creatable
      {...props}
      defaultValue={options[0] || label}
      styles={REACT_SELECT_STYLES}
      components={customComponents}
      isDisabled={disabled}
    />
  )
}

SingleSelectCreatable.defaultProps = {
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

export default SingleSelectCreatable
