import React from 'react'
import * as R from 'ramda'
import { getHeadErrorOrEmptyObj, getOptionByValue } from '../utils/form'
import { SingleSelect } from '../components'

interface SingleSelectFieldProps {
  name: string
  required: boolean
  options: { label: string; value: string | boolean | number }[]
  label: string
  error?: boolean
  errorText?: string
  disabled: boolean
  t: (key: string, options: any) => string
  reset?: boolean
  value: string | boolean | number
  id: string
  onChange: (name: string, value: string | boolean | number) => any
  validate: (name: string, v: any) => any
}

export const SingleSelectField = (
  props: SingleSelectFieldProps
): JSX.Element => {
  const {
    disabled,
    options,
    name,
    label,
    onChange,
    validate,
    value: initialValue,
    required,
    reset,
    t
  } = props

  const defaultOption = getOptionByValue(initialValue)(options)

  // Current select option value
  const [value, _setValue] = React.useState(defaultOption || '')

  // Indicator for whether the field is open or not.
  const [touched, _setTouched] = React.useState<boolean>(false)

  // Validator state
  const [{ valid, error }, _validate] = React.useState({
    valid: true,
    error: {}
  })

  React.useEffect(() => {
    if (touched && !reset) {
      validate(name, (v: any) => {
        _validate({ valid: v.valid, error: getHeadErrorOrEmptyObj(v) })
      })
    }
  }, [value, touched, reset])

  React.useEffect(() => {
    if (reset) {
      _setValue(getOptionByValue(initialValue)(options) || '')
    }
  }, [reset])

  React.useEffect(() => {
    _setValue(getOptionByValue(initialValue)(options) || '')
  }, [initialValue, options])

  // Handle the state on focus
  const handleFocus = () => _setTouched(true)

  // Handle changing the value state
  const handleChange = (option: any) => {
    _setValue(option)
    onChange(name, option.value)
  }

  return (
    <SingleSelect
      required={required}
      options={options}
      onFocus={handleFocus}
      label={label}
      value={value}
      error={!valid}
      disabled={disabled}
      errorText={
        valid
          ? ''
          : t(R.propOr('', 'key', error), R.propOr({}, 'options', error))
      }
      onChange={handleChange}
      instanceId={name}
      id={name}
    />
  )
}

SingleSelectField.defaultProps = {
  name: '',
  label: '',
  disabled: false,
  required: false,
  validate: () => {},
  variant: 'outlined'
}

export default SingleSelectField
