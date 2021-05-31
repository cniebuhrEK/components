import React, { useEffect, useState } from 'react'
import { propOr } from 'ramda'
import { getHeadErrorOrEmptyObj } from '../utils/form'
import UploadFile from '../components/UploadFile'

interface UploadFileProps {
  onChange: (name, value) => any
  reset: boolean
  id: string
  name?: string
  label: string | JSX.Element
  required?: boolean
  errorText?: string
  t: (key, options) => string
  validate: (name, v) => any
  disabled?: boolean
}

export const UploadFileField = (props: UploadFileProps): JSX.Element => {
  const { name, id, onChange, validate, label, required, disabled, reset, t } =
    props
  const [touched, _setTouched] = useState(false)
  const [value, _setValue] = useState(null)
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
      _setValue(null)
    }
  }, [reset])

  const handleChange = file => {
    _setTouched(true)
    _setValue(file)
    onChange(name, file)
  }

  const errorText =
    valid || disabled
      ? ''
      : t(propOr('', 'key', error), propOr({}, 'options', error))

  const hasError = !valid && !disabled

  return (
    <UploadFile
      disabled={disabled}
      onChange={handleChange}
      reset={reset}
      id={id}
      label={label}
      required={required}
      error={hasError}
      errorText={errorText}
    />
  )
}

export default UploadFileField
