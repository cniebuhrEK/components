import React from 'react'
import styled from 'styled-components'
import CheckmarkIcon from '../../icons/Checkmark'
import cx from 'classnames'

interface CheckboxProps {
  name: string
  isSelected: boolean
  disabled?: boolean
  intersection?: boolean
  onChange: (e: any) => void
  outlined?: boolean
}

const Checkbox = (props: CheckboxProps): JSX.Element => {
  const checkboxClass = cx({
    'exam-checkbox': true,
    'exam-checkbox--selected': props.isSelected
  })

  const handleClick = (e: any) => {
    e.preventDefault()
    !props.disabled && props.onChange(!props.isSelected)
  }

  return (
    <Container
      outlined={props.outlined}
      isDisabled={props.disabled}
      className={checkboxClass}
      id={`exam-checkbox-${props.name}`}
      data-is-selected={`${props.isSelected}`}
      data-is-intersected={`${props.intersection}`}
      onClick={handleClick}
    >
      <div className='exam-checkbox--checked'>
        <CheckmarkIcon />
      </div>
      <div className='exam-checkbox--unchecked'>
        {props.intersection && <MinusIcon />}
      </div>
    </Container>
  )
}

export const MinusIcon = styled.div`
  width: 8px;
  height: 2px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.backgrounds.main};
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  border: 1px solid ${({ theme }) => theme.colors.checkbox.border};
  color: ${({ theme }) => theme.colors.checkbox.font} !important;
  background-color: ${({ theme }) => theme.colors.checkbox.background};
  border-radius: 2px;
  font-size: 12px !important;
  cursor: ${({ isDisabled }) => (isDisabled ? 'not-allowed' : 'pointer')};
  transition: all 500ms;
  overflow: hidden;
  opacity: ${({ isDisabled }) => (isDisabled ? 0.3 : 1)};

  &[data-is-selected='true'] {
    background-color: ${({ theme, outlined }) =>
      outlined
        ? theme.colors.checkbox.background
        : theme.colors.checkbox.backgroundActive};
    border: 1px solid
      ${({ theme, outlined }) =>
        outlined
          ? theme.colors.checkbox.border
          : theme.colors.checkbox.borderActive};
    color: ${({ theme, outlined }) =>
      outlined
        ? theme.colors.checkbox.borderActive
        : theme.colors.checkbox.fontActive} !important;

    .exam-checkbox--checked {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px !important;
      z-index: 1;
      color: ${({ theme, outlined }) =>
        outlined
          ? theme.colors.checkbox.borderActive
          : theme.colors.checkbox.fontActive} !important;
    }

    .exam-checkbox--unchecked {
      display: none;
    }
  }

  &[data-is-intersected='true'] {
    background-color: ${({ theme, outlined }) =>
      outlined
        ? theme.colors.checkbox.background
        : theme.colors.checkbox.backgroundActive};
    border: 1px solid
      ${({ theme, outlined }) =>
        outlined
          ? theme.colors.checkbox.border
          : theme.colors.checkbox.borderActive};
    color: ${({ theme, outlined }) =>
      outlined
        ? theme.colors.checkbox.borderActive
        : theme.colors.checkbox.fontActive} !important;
  }

  &[data-is-selected='false'] {
    .exam-checkbox--checked {
      display: none;
    }

    .exam-checkbox--unchecked {
      display: inline-block;
    }
  }
`

export default Checkbox
