import React from 'react'
import styled from 'styled-components'
import CorrectMarkIcon from '../../icons/CorrectMark'
import CloseIcon from '../../icons/Close'

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
  contentQuestion?: boolean
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
    isAnswered,
    contentQuestion
  } = props

  function handleOnChange(): void {
    !isDisabled && onChange(value)
  }

  return (
    <Container
      contentQuestion={contentQuestion}
      id={id}
      name={name}
      onClick={handleOnChange}
      isChecked={isChecked}
      isDisabled={isDisabled}
      isAnswered={isAnswered}
    >
      <IconContainer className={`${isAnswered ? 'radio-answer-icon' : ''}`}>
        {isAnswered ? (
          isRight ? (
            <IconPosition isRight={isRight}>
              <CorrectMarkIcon width='21' height='21' />
            </IconPosition>
          ) : (
            <IconPosition isRight={isRight}>
              <CloseIcon width='21' height='21' />
            </IconPosition>
          )
        ) : null}
        <div className='radio-icon' />
      </IconContainer>
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
  align-items: ${({ contentQuestion }) =>
    contentQuestion ? 'flex-start' : 'center'};
  cursor: pointer;
  user-select: none;
  /* margin-top: 5px; */
  position: relative;
  .radio-icon {
    position: relative;
    width: 16px;
    height: 16px;
    border: 1px solid ${({ theme }) => theme.colors.radio.border};
    background-color: ${({ theme }) => theme.colors.radio.background};
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
        isChecked ? theme.colors.radio.mark : theme.colors.radio.background};
    }
  }

  .radio-label {
    font-size: 12px;
    line-height: 15px;
    letter-spacing: -0.1px;
    color: ${({ theme }) => theme.colors.radio.font};
    margin-left: 10px;
    transform: translateY(2px);
  }
`
const IconPosition = styled.div`
  position: absolute;
  top: -3px !important;
  left: -3px !important;
  z-index: 999;
  color: ${({ theme, isRight }) =>
    isRight ? theme.colors.main.success500 : theme.colors.main.error500};
    }
`
const IconContainer = styled.div`
  position: relative;
`

export default RadioButton
