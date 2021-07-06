import React from 'react'
import DatePicker from 'react-datepicker'
import styled from 'styled-components'
import * as R from 'ramda'
import 'react-datepicker/dist/react-datepicker.css'

const getHeadErrorOrEmptyObj = R.pipe(
  R.propOr([], 'errors'),
  R.ifElse(R.isEmpty, R.always({}), R.head)
)

interface DateFieldProps {
  // Name of the input
  name: string

  // Class name of the input element
  className?: string

  // Id of the input element
  id?: string

  // Label of the form input
  label?: string

  // Flag to indicate whether the input is disabled or not.
  disabled?: boolean

  // Flag to allow setting dates before the current date.
  allowPast: boolean

  // Current date
  value: Date

  // Flag to allow clearing of the input
  clearable?: boolean

  // Flag to indicate whether the field is required or not.
  required?: boolean

  // Function to valid the input
  validate: (name: string, v: any) => any

  // Flag to quickly reset the form state
  reset?: boolean

  // Handler function to be called every time the input is updated.
  onChange: (name: string, value: any) => void
}

// Date input field component
const DateField = (props: DateFieldProps) => {
  const {
    name,
    id,
    allowPast,
    value: initialValue,
    clearable,
    validate,
    required,
    disabled,
    reset,
    className,
    onChange
  } = props

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

    // Temporary
    console.error(error)
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

  return (
    <DatePickerContainer>
      <DatePicker
        name={name}
        id={id || name}
        className={className}
        disabled={disabled || !valid}
        required={required}
        minDate={!allowPast ? new Date() : null}
        selected={value}
        isClearable={clearable}
        onFocus={handleFocus}
        onChange={handleChange}
      />
    </DatePickerContainer>
  )
}

DateField.defaultProps = {
  allowPast: false,
  value: new Date(),
  required: false,
  clearable: false,
  validate: () => {}
}

// The classname for these selectors will change depending on the
// classname prop to the datepicker.
const DatePickerContainer = styled.div`
  display: block;
  margin-bottom: 1em;

  .react-datepicker-wrapper,
  .react-datepicker__input-container,
  .react-datepicker__input-container input {
    display: block;
    width: 100%;
  }
`

export default DateField
