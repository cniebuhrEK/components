import React from 'react'
import DatePicker from 'react-datepicker'
import styled from 'styled-components'
import * as R from 'ramda'
import 'react-datepicker/dist/react-datepicker.css'
import { isNotNilOrEmpty } from '../../utils/ramda'

const getHeadErrorOrEmptyObj = R.pipe(
  R.propOr([], 'errors'),
  R.ifElse(R.isEmpty, R.always({}), R.head)
)

interface DateFieldProps {
  name: string
  className?: string
  id?: string
  label?: string
  disabled?: boolean
  allowPast?: boolean
  value: Date
  isClearable?: boolean
  required?: boolean
  validate: (name: string, v: any) => any
  reset?: boolean
  t: (key: string, options: any) => string
  onChange: (name: string, value: any) => void
  [x: string]: any
}

const DateField = (props: DateFieldProps) => {
  const {
    name,
    id,
    allowPast,
    value: initialValue,
    validate,
    required,
    disabled,
    label,
    t,
    reset,
    onChange,
    ...rest
  } = props

  console.log({ label })

  // Has the input been touched
  const [touched, _setTouched] = React.useState<boolean>(false)
  const [value, _setValue] = React.useState<Date>(initialValue)
  const [{ valid, error }, _validate] = React.useState({
    valid: true,
    error: {}
  })

  // When the input changes or is focused, validate the input.
  React.useEffect(() => {
    if (touched && !reset) {
      validate(name, (v: any) => {
        _validate({ valid: v.valid, error: getHeadErrorOrEmptyObj(v) })
      })
    }
  }, [value, touched, reset])

  // When the initial value changes
  React.useEffect(() => {
    _setValue(initialValue)
  }, [initialValue])

  // When a reset occurs, set the value to the initial value
  React.useEffect(() => {
    if (reset) {
      _setValue(initialValue || new Date())
    }
  }, [reset])

  // Change the focus
  const handleFocus = () => _setTouched(true)

  // Handle change
  const handleChange = (date: Date) => {
    _setValue(date)
    onChange(name, date)
  }

  const errorText =
    valid || disabled
      ? ''
      : t(R.propOr('', 'key', error), R.propOr({}, 'options', error))

  return (
    <DatePickerContainer error={isNotNilOrEmpty(error)}>
      <Label htmlFor={name} error={isNotNilOrEmpty(error)}>
        {label}
        {required && ' *'}
      </Label>
      <DatePicker
        {...rest}
        id={id || name}
        name={name}
        disabled={disabled || !valid}
        minDate={!allowPast ? new Date() : null}
        selected={value}
        onFocus={handleFocus}
        onChange={handleChange}
      />
      <ErrorContainer error={!valid}>{errorText}</ErrorContainer>
    </DatePickerContainer>
  )
}

DateField.defaultProps = {
  allowPast: false,
  value: new Date(),
  required: false,
  isClearable: false,
  validate: () => {}
}

// The classname for these selectors will change depending on the
// classname prop to the datepicker.
const DatePickerContainer = styled.div`
  display: block;
  position: relative;

  .react-datepicker-wrapper,
  .react-datepicker__input-container,
  .react-datepicker__input-container input {
    display: block;
    width: 100%;
    position: relative;
    z-index: 10;
  }

  .react-datepicker-popper {
    z-index: 10;
  }

  .react-datepicker-wrapper {
    margin: 25px 0 15px;
    border-radius: ${({ theme }) => theme.shape.borderRadiusNormal};
  }

  input {
    border-width: 1px;
    border-style: solid;
    border-radius: ${({ theme }) => theme.shape.borderRadiusNormal};
    height: 42px;
    padding: 0 14px;
    font-size: 16px;
    outline: 0;
    border-color: ${({ theme, error }) =>
      error ? theme.palette.red05 : theme.palette.border};
  }
`

const ErrorContainer = styled.div`
  display: ${({ error }) => (error ? 'block' : 'none')};
  color: ${({ theme }) => theme.palette.red05};
  font-size: 12px;
  position: absolute;
  left: -1px;
  bottom: -20px;
  white-space: nowrap;
`

const Label = styled.label`
  box-sizing: border-box;
  color: ${({ error, theme }) =>
    error ? theme.palette.red05 : theme.palette.textDark};
  position: absolute;
  font-size: 12px;
  line-height: 12px;
  left: -6px;
  top: 5px;
  z-index: 1;
  padding: 0 5px;
  background-color: transparent;
  transition: all 200ms ${({ theme }) => theme.transitions.easing.easeInOut} 0ms;
`

export default DateField
