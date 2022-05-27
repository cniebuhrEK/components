import React from 'react'
import * as R from 'ramda'
import { Calendar } from '../../components/Calendar'
import { Input } from '../../components'

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
  size?: string
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
    size,
    ...rest
  } = props

  const [touched, _setTouched] = React.useState<boolean>(false)
  const [value, _setValue] = React.useState(initialValue)
  const [{ valid, error }, _validate] = React.useState({
    valid: true,
    error: {}
  })

  React.useEffect(() => {
    if (touched && !reset) {
      validate(name, v => {
        _validate({ valid: v.valid, error: getHeadErrorOrEmptyObj(v) })
      })
    }
  }, [value, touched, reset])

  React.useEffect(() => {
    _setValue(initialValue)
  }, [initialValue])

  React.useEffect(() => {
    if (reset) {
      _setValue(initialValue || '')
    }
  }, [reset])

  const handleFocus = () => _setTouched(true)
  const handleChange = (date: Date) => {
    _setValue(date)
    onChange(name, date)
  }

  const formattedDate = dateObject => {
    return (
      dateObject.getMonth() +
      1 +
      '/' +
      dateObject.getDate() +
      '/' +
      dateObject.getFullYear()
    )
  }

  const onInputChange = () => {
    const inputElement = document.getElementById(id || name)
    // @ts-ignore
    inputElement.click()
  }

  return (
    <React.Fragment>
      <Calendar
        {...rest}
        id={id || name}
        name={name}
        disabled={disabled}
        minDate={!allowPast ? new Date() : null}
        selected={value}
        onFocus={handleFocus}
        onChange={handleChange}
      >
        <Input
          disableTyping
          disabled={disabled}
          required={required}
          name={name}
          id={`${id}-input`}
          label={label}
          value={formattedDate(value)}
          errorText={
            valid || disabled
              ? ''
              : t(R.propOr('', 'key', error), R.propOr({}, 'options', error))
          }
          type='text'
          error={!valid && !disabled}
          onChange={onInputChange}
          size={size}
          wrappedLabel
        />
      </Calendar>
    </React.Fragment>
  )
}

DateField.defaultProps = {
  allowPast: false,
  value: new Date(),
  required: false,
  isClearable: false,
  validate: () => {},
  id: 'date-picker',
  size: 'normal'
}

export default DateField
