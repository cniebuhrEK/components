import React from 'react'
import * as R from 'ramda'
import { getHeadErrorOrEmptyObj } from '../utils/form'
import { Input } from '../components'

interface InputProps {
  name: string
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
  onChange: (name: string, value: string | number) => any
  onFocus?: (e: any) => any
  onBlur?: (e: any) => any
  validate: (name: string, v: any) => any
  errorText?: string
  reset?: boolean
  revalidate?: boolean
  t: (key: string, options: any) => string
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
    revalidate = false,
    t,
    ...rest
  } = props

  const [touched, _setTouched] = React.useState<boolean>(false)
  const [shouldRevalidate, setShouldRevalidate] = React.useState<boolean>(false)
  const [value, _setValue] = React.useState(initialValue)
  const [{ valid, error }, _validate] = React.useState({
    valid: true,
    error: {}
  })

  React.useEffect(() => {
    setShouldRevalidate(revalidate)
  }, [revalidate])

  React.useEffect(() => {
    if (touched && !reset) {
      validate(name, v => {
        _validate({ valid: v.valid, error: getHeadErrorOrEmptyObj(v) })
      })
    }
  }, [value, touched, reset])

  React.useEffect(() => {
    if (shouldRevalidate) {
      validate(name, v => {
        _validate({ valid: v.valid, error: getHeadErrorOrEmptyObj(v) })
      })
      setShouldRevalidate(false)
    }
  }, [value, revalidate, shouldRevalidate])

  // When the initial value changes
  React.useEffect(() => {
    _setValue(initialValue)
  }, [initialValue])

  // When a reset occurs, set the value to the initial value
  React.useEffect(() => {
    if (reset) {
      _setValue(initialValue || '')
    }
  }, [reset])

  // Change the focus
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
          : t(R.propOr('', 'key', error), R.propOr({}, 'options', error))
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
  name: '',
  value: '',
  onChange: () => {},
  validate: () => {}
}

export default InputField
