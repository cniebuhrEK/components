import React from 'react'
import * as R from 'ramda'
import { getHeadErrorOrEmptyObj } from '../utils/form'
import { Tag } from '../components'
import styled from 'styled-components'

interface SelectTagColorProps {
  onChange: (name: string, value: any) => any
  reset: boolean
  id: string
  value?: string
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
export const SelectTagColorField = (
  props: SelectTagColorProps
): JSX.Element => {
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
    revalidate,
    value
  } = props

  // Indicator for whether the input is open or not
  const [touched, _setTouched] = React.useState(false)

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

  const handleChange = value => {
    _setTouched(true)
    onChange(name, value)
  }

  const errorText =
    valid || disabled
      ? ''
      : t(R.propOr('', 'key', error), R.propOr({}, 'options', error))

  const hasError = !valid && !disabled

  const tagsArray = [
    'purple',
    'red',
    'blue',
    'green',
    'turquoise',
    'orange',
    'brown',
    'mathPurple',
    'yellow',
    'aquamarine'
  ]

  const renderTags = tagsArray.map(tagColor => (
    <Tag
      key={`select-tag-color-${tagColor}`}
      id={`select-tag-color-${tagColor}`}
      // @ts-ignore
      color={tagColor}
      onClick={handleChange}
      text={'   '}
      isActive={value === tagColor}
    />
  ))

  return (
    <SelectTagColorContainer id={id} name={name}>
      {label && (
        <div className='label-container'>
          {label}
          {required && ' *'}
        </div>
      )}
      <div className='tags-container'>{renderTags}</div>
      {hasError && <div className='error-container'>{errorText}</div>}
    </SelectTagColorContainer>
  )
}

SelectTagColorField.defaultProps = {
  id: '',
  reset: false,
  name: '',
  disabled: false,
  required: false,
  errorText: ''
}

export default SelectTagColorField

const SelectTagColorContainer = styled.div`
  .label-container {
    font-size: 12px;
    line-height: 15px;
    letter-spacing: -0.1px;
  }

  .tags-container {
    display: inline-flex;
    flex-wrap: wrap;
    gap: 10px 20px;
    max-width: 330px;
    margin-top: 7px;
  }

  .error-container {
    color: ${({ theme }) => theme.palette.red05};
    font-size: 12px;
    line-height: 15px;
    white-space: nowrap;
    margin-top: 10px;
  }
`
