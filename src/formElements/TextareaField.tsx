import React from 'react'
import * as R from 'ramda'
import { getHeadErrorOrEmptyObj } from '../utils/form'
import { Textarea } from '../components'

interface TextareaProps {
  name: string
  id?: string
  label?: string
  required?: boolean
  disabled?: boolean
  autoComplete?: any
  autoFocus?: any
  value?: string
  error?: boolean
  inputProps?: object
  inputRef?: any
  onChange: (name: string, value: string) => void
  onFocus?: (e: any) => void
  onBlur?: (e: any) => void
  validate: (name: string, v: any) => any
  errorText?: string
  reset?: boolean
  t: (key: string, options: any) => string
  [x: string]: any
}

export const TextareaField = (props: TextareaProps): JSX.Element => {
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

  // Has the input been touched
  const [touched, _setTouched] = React.useState<boolean>(false)
  const [value, _setValue] = React.useState<string | undefined>(initialValue)
  const [{ valid, error }, _validate] = React.useState({
    valid: true,
    error: {}
  })

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

  React.useEffect(() => {
    if (touched && !reset) {
      validate(name, (v: any) => {
        _validate({ valid: v.valid, error: getHeadErrorOrEmptyObj(v) })
      })
    }
  }, [value, touched, reset])

  // Change the focus
  const handleFocus = () => _setTouched(true)
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    _setValue(e.target.value)
    onChange(name, e.target.value)
  }

  return (
    <Textarea
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
      error={!valid && !disabled}
      onFocus={handleFocus}
      onChange={handleChange}
      {...rest}
    />
  )
}

TextareaField.defaultProps = {
  name: '',
  value: '',
  onChange: () => {},
  validate: () => {}
}

export default TextareaField
