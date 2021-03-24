import React, { useEffect, useState } from 'react'
import { propOr } from 'ramda'
import { getHeadErrorOrEmptyObj, getOptionByValue } from '../utils/form'
import SingleSelect from '../components/SingleSelect'

interface SingleSelectFieldProps {
  name?: string
  required?: boolean
  options: { label: string; value: string | boolean | number }[]
  label: string
  error?: boolean
  errorText?: string
  disabled?: boolean
  t: (key, options) => string
  reset?: boolean
  value: string | boolean | number
  id: string
  onChange: (name, value) => any
  validate: (name, v) => any
}

export const SingleSelectField = (
  props: SingleSelectFieldProps
): JSX.Element => {
  const {
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

  const [value, _setValue] = useState(defaultOption || '')
  const [touched, _setTouched] = useState(false)
  const [{ valid, error }, _validate] = useState({
    valid: true,
    error: {}
  })

  useEffect(() => {
    if (touched && !reset) {
      validate(name, v => {
        _validate({ valid: v.valid, error: getHeadErrorOrEmptyObj(v) })
      })
    }
  }, [value, touched, reset])

  useEffect(() => {
    if (reset) {
      _setValue(getOptionByValue(initialValue)(options) || '')
    }
  }, [reset])

  useEffect(() => {
    _setValue(getOptionByValue(initialValue)(options))
  }, [initialValue])

  const handleFocus = () => _setTouched(true)
  const handleChange = option => {
    _setValue(option)
    onChange(name, option.value)
  }

  return (
    <SingleSelect
      required={required}
      options={options}
      onFocus={handleFocus}
      label={label}
      // @ts-ignore
      value={value}
      error={!valid}
      errorText={
        valid ? '' : t(propOr('', 'key', error), propOr({}, 'options', error))
      }
      onChange={handleChange}
      instanceId={name}
      id={name}
    />
  )
}

SingleSelectField.defaultProps = {
  validate: () => {},
  variant: 'outlined'
}

export default SingleSelectField
