import React from 'react'
import styled from 'styled-components'
import {
  includes,
  filter,
  pipe,
  propOr,
  toLower,
  ifElse,
  equals,
  not,
  append
} from 'ramda'
import { Scroller } from '../Scroller'
import { Checkbox } from '../Checkbox'
import { Input } from '../Input'

interface SelectMultipleProps {
  options: {
    label: string
    value: any
  }[]
  defaultOptions: any[]
  placeholder?: string
  onChange: (e) => void
}

const SelectMultiple = (props: SelectMultipleProps): JSX.Element => {
  const { options, defaultOptions, onChange, placeholder } = props
  const [filteredOptions, setFilteredOptions] = React.useState(options)
  const [selectedOptions, setSelectedOptions] = React.useState(defaultOptions)
  const [value, setValue] = React.useState('')

  React.useEffect(() => {
    setFilteredOptions(options)
  }, [options])

  React.useEffect(() => {
    setSelectedOptions(defaultOptions)
  }, [defaultOptions])

  React.useEffect(() => {
    handleSearch(value)
  }, [value])

  React.useEffect(() => {
    onChange(selectedOptions)
  }, [selectedOptions])

  const handleSelectOption = option => () => {
    const newArray = ifElse(
      includes(option.value),
      filter(pipe(equals(option.value), not)),
      append(option.value)
    )(selectedOptions)

    setSelectedOptions(newArray)
  }

  const handleSearch = value => {
    const newOptions = filter(
      pipe(propOr('', 'label'), toLower, includes(toLower(value)))
    )(options)

    setFilteredOptions(newOptions)
  }

  const isOptionSelected = value => includes(value, selectedOptions)

  const handleInputChange = e => {
    e.preventDefault()
    setValue(e.target.value)
  }

  const rows = filteredOptions.map(option => (
    <SelectMultipleOption
      onClick={handleSelectOption(option)}
      key={`select-multiple-option-${option.value}`}
    >
      <Checkbox
        name={`select-multiple-checkbox-${option.value}`}
        isSelected={isOptionSelected(option.value)}
        onChange={() => {}}
      />
      <span>{option.label}</span>
    </SelectMultipleOption>
  ))

  return (
    <SelectMultipleContainer>
      <Input
        size='small'
        name='search-options'
        type='search'
        value={value}
        placeholder={placeholder || ''}
        onChange={handleInputChange}
      />
      <SelectMultipleOptionsContainer>{rows}</SelectMultipleOptionsContainer>
    </SelectMultipleContainer>
  )
}

SelectMultiple.defaultProps = {
  options: []
}

const SelectMultipleContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.backgrounds.main};
  border-radius: ${({ theme }) => theme.shape.borderRadiusSmall};
  padding: 8px;
`

const SelectMultipleOptionsContainer = styled(Scroller)`
  display: flex;
  flex-direction: column;
  max-height: 236px;
  overflow-y: auto;
  margin-top: 6px;
`

const SelectMultipleOption = styled.div`
  cursor: pointer;
  padding: 13px 0;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: -0.00450187px;
  display: flex;
  align-items: center;
  gap: 8px;
`

export default SelectMultiple
