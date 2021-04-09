import React, { useEffect, useState } from 'react'
import { propOr } from 'ramda'
import { getHeadErrorOrEmptyObj } from '../utils/form'
import Input from '../components/Input'

interface InputProps {
  name?: string
  id?: string
  label?: string
  required?: boolean
  disabled?: boolean
  type?: string
  autoComplete?: any
  autoFocus?: any
  value?: string | number
  error?: boolean
  inputProps?: object
  inputRef?: any
  onChange: (name, value) => any
  onFocus?: (e) => any
  onBlur?: (e) => any
  validate: (name, v) => any
  errorText?: string
  reset?: boolean
  t: (key, options) => string
  [x: string]: any
}

export const InputField = (props: InputProps): JSX.Element => {
  const {
    name,
    id,
    type,
    onChange,
    validate,
    label,
    value: initialValue,
    required,
    disabled,
    reset,
    t,
    ...rest
  } = props
  const [touched, _setTouched] = useState(false)
  const [value, _setValue] = useState(initialValue)
  const [{ valid, error }, _validate] = useState({
    valid: true,
    error: {},
  })

  useEffect(() => {
    if (touched && !reset) {
      validate(name, v => {
        _validate({ valid: v.valid, error: getHeadErrorOrEmptyObj(v) })
      })
    }
  }, [value, touched, reset])

  useEffect(() => {
    _setValue(initialValue)
  }, [initialValue])

  useEffect(() => {
    if (reset) {
      _setValue(initialValue || '')
    }
  }, [reset])

  const handleFocus = () => _setTouched(true)
  const handleChange = (e: { target: { value: string } }) => {
    _setValue(e.target.value)
    onChange(name, e.target.value)
  }

  return (
    <Input
      disabled={disabled}
      required={required}
      name={name}
      id={id || name}
      label={label}
      value={value}
      errorText={
        valid || disabled
          ? ''
          : t(propOr('', 'key', error), propOr({}, 'options', error))
      }
      type={type}
      error={!valid && !disabled}
      onFocus={handleFocus}
      onChange={handleChange}
      {...rest}
    />
  )
}

InputField.defaultProps = {
  value: '',
  onChange: () => {},
  validate: () => {},
}

export default InputField
