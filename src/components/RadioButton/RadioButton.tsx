import React from 'react'
import styled from 'styled-components'

interface RadioButtonProps {
  isChecked?: boolean
  id?: string
  name: string
  value: any
  label?: JSX.Element | string
  onChange: (e: any) => void
  isDisabled?: boolean
}

const RadioButton = (props: RadioButtonProps) => {
  const { id, name, label, onChange, isChecked, isDisabled, value } = props

  function handleOnChange(): void {
    onChange(value)
  }

  return (
    <RadioContainer>
      {label && label}
      <input
        id={id}
        name={name}
        type='radio'
        value={value}
        disabled={isDisabled}
        checked={isChecked}
        onChange={handleOnChange}
      />

      <Checkmark />
    </RadioContainer>
  )
}

RadioButton.defaultProps = {
  isChecked: false,
  isDisabled: false,
  id: '',
  name: '',
  label: '',
  onChange: () => {}
}

const Checkmark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 16px;
  width: 16px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.palette.background};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 4px;
    left: 4px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${({ theme }) => theme.palette.inactive};
  }
`

const RadioContainer = styled.label`
  box-sizing: border-box;
  cursor: pointer;
  display: block;
  font-size: 16px;
  margin: 0 0 12px 0;
  min-height: 22px;
  padding: 0 0 0 24px;
  position: relative;
  user-select: none;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  input:checked ~ ${Checkmark}:after {
    background-color: ${({ theme }) => theme.palette.green01};
  }
`

export default RadioButton
