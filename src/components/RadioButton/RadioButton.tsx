import React from 'react'
import styled from 'styled-components'

interface RadioButtonProps {
  isRight?: boolean
  isAnswered?: boolean
  isChecked?: boolean
  id?: string
  name: string
  value: any
  label?: JSX.Element | string
  onChange: (e: any) => void
  isDisabled?: boolean
}

const RadioButton = (props: RadioButtonProps) => {
  const {
    id,
    name,
    label,
    onChange,
    isChecked,
    isDisabled,
    value,
    isRight,
    isAnswered
  } = props

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
      isRight={isRight}
      isAnswered={isAnswered}
    >
      <div className={`${isAnswered ? 'radio-answer-icon' : ''}`}>
        <div className='radio-icon' />
      </div>
      {label && <div className='radio-label'>{label}</div>}
    </Container>
  )
}

RadioButton.defaultProps = {
  isRight: false,
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
  .radio-answer-icon {
    position: relative;
    &::after {
      position: absolute;
      top: -1px !important;
      left: -1px !important;
      content: ${({ isRight }) =>
        isRight
          ? `url('/assets/contentQuestions/CorrectAnswer.svg')`
          : `url('/assets/contentQuestions/IncorrectAnswer.svg')`};
      width: 16px;
      height: 16px;
      top: 3px;
      left: 3px;
    }
  }
  .radio-icon {
    position: relative;
    width: 16px;
    height: 16px;
    border: 1px solid ${({ theme }) => theme.palette.placeholder};
    background-color: ${({ theme }) => theme.palette.biege};
    border-radius: 50%;
    flex: none;

    &::after {
      content: '';
      position: absolute;
      width: 8px;
      height: 8px;
      top: 3px;
      left: 3px;
      border-radius: 50%;
      background-color: ${({ theme, isChecked }) =>
        isChecked ? theme.palette.brown01 : theme.palette.white};
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
