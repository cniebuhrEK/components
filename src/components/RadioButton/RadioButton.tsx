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
    !isDisabled && onChange(value)
  }

  return (
    <Container
      id={id}
      name={name}
      onClick={handleOnChange}
      isChecked={isChecked}
      isDisabled={isDisabled}
    >
      <div className='radio-icon' />
      {label && <div className='radio-label'>{label}</div>}
    </Container>
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

const Container = styled.div`
  display: flex;
  font-size: 12px;
  line-height: 16px;
  align-items: center;
  cursor: pointer;
  user-select: none;
  margin-top: 5px;

  .radio-icon {
    position: relative;
    width: 16px;
    height: 16px;
    background-color: ${({ theme }) => theme.palette.biege};
    box-shadow: ${({ theme }) => theme.shadows.darkShadow};
    border-radius: 50%;
    flex: none;

    &::after {
      content: '';
      position: absolute;
      width: 8px;
      height: 8px;
      top: 4px;
      left: 4px;
      border-radius: 50%;
      background-color: ${({ theme, isChecked }) =>
        isChecked ? theme.palette.brown01 : theme.palette.inactive};
    }
  }

  .radio-label {
    font-size: 12px;
    line-height: 15px;
    letter-spacing: -0.1px;
    color: ${({ theme }) => theme.palette.brown01};
    margin-left: 10px;
    transform: translateY(2px);
  }
`

export default RadioButton
