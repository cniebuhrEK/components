import React from 'react'
import * as R from 'ramda'
import { getHeadErrorOrEmptyObj } from '../utils/form'
import { UploadFile } from '../components'

interface UploadFileProps {
  onChange: (name: string, value: any) => any
  reset: boolean
  id: string
  name: string
  label: string | JSX.Element
  required: boolean
  errorText: string
  t: (key: string, options: any) => string
  validate: (name: string, v: any) => any
  disabled: boolean
  revalidate?: boolean
}

// Form field for uploading files
export const UploadFileField = (props: UploadFileProps): JSX.Element => {
  const {
    name,
    id,
    onChange,
    validate,
    label,
    required,
    disabled,
    reset,
    t,
    revalidate
  } = props

  // Indicator for whether the input is open or not
  const [touched, _setTouched] = React.useState(false)

  // Current value of the file field
  const [value, _setValue] = React.useState(null)

  // Validator state
  const [{ valid, error }, _validate] = React.useState({
    valid: true,
    error: {}
  })

  React.useEffect(() => {
    if ((touched && !reset) || revalidate) {
      validate(name, (v: any) => {
        _validate({ valid: v.valid, error: getHeadErrorOrEmptyObj(v) })
      })
    }
  }, [value, touched, reset, revalidate])

  // Wait for reset
  React.useEffect(() => {
    if (reset) {
      _setValue(null)
    }
  }, [reset])

  const handleChange = (file: any) => {
    _setTouched(true)
    _setValue(file)
    onChange(name, file)
  }

  const errorText =
    valid || disabled
      ? ''
      : t(R.propOr('', 'key', error), R.propOr({}, 'options', error))

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

UploadFileField.defaultProps = {
  id: '',
  reset: false,
  name: '',
  disabled: false,
  required: false,
  errorText: ''
}

export default UploadFileField
