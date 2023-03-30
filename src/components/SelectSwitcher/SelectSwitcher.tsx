import React from 'react'
import styled from 'styled-components'

interface SelectSwitcherProps {
  value: string
  label?: string
  size?: 'small' | 'large'
  width?: string
  onChange: (v) => void
  id: string
  options: {
    label: string
    value: string
  }[]
}

export const SelectSwitcher = (props: SelectSwitcherProps): JSX.Element => {
  const {
    options,
    value: defaultValue,
    id,
    onChange = () => {},
    label,
    width,
    size
  } = props

  const [value, setValue] = React.useState(defaultValue)

  React.useEffect(() => {
    setValue(defaultValue)
  }, [defaultValue])

  React.useEffect(() => {
    onChange(value)
  }, [value])

  const handleClick = value => () => setValue(value)

  const renderOptions = options.map(option => (
    <Option
      size={size}
      key={`${id}-option-${option.value}`}
      onClick={handleClick(option.value)}
      active={option.value === value}
    >
      {option.label}
    </Option>
  ))

  return (
    <Container id={id} width={width}>
      {label && <Label>{label}</Label>}
      <OptionsContainer>{renderOptions}</OptionsContainer>
    </Container>
  )
}

export default SelectSwitcher

const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: ${({ width }) => width || '100px'};
  min-height: 40px;
`

const Label = styled.div`
  font-weight: 700;
  font-size: 11px;
  line-height: 13px;
`

const Option = styled.div`
  cursor: pointer;
  font-size: ${({ size }) => (size === 'large' ? '12px' : '11px')};
  line-height: ${({ size }) => (size === 'large' ? '24px' : '17px')};
  border-radius: ${({ size }) => (size === 'large' ? '2px' : '12px')};
  padding: 0 8px;
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
  color: ${({ theme, active }) =>
    active ? theme.colors.main.white : theme.colors.main.grey600};
  background: ${({ theme, active }) =>
    active ? theme.colors.main.primaryGradient : 'transparent'};
  transition: background 800ms
    ${({ theme }) => theme.transitions.easing.easeInOut};
`

const OptionsContainer = styled.div`
  display: flex;
  gap: 6px;
  margin-top: 3px;
`
