import React from 'react'
import styled from 'styled-components'
import cx from 'classnames'

interface CheckboxProps {
  name: string
  label: string
  isSelected: boolean
  onChange: (e) => void
}

const Checkbox = (props: CheckboxProps): JSX.Element => {
  const { isSelected } = props

  const checkboxClass = cx({
    'exam-checkbox': true,
    'exam-checkbox--selected': isSelected
  })

  const handleClick = () => {
    props.onChange(!isSelected)
  }

  return (
    <CheckboxContainer>
      <input
        className={checkboxClass}
        type='checkbox'
        id={`exam-checkbox-danger-${props.name}`}
        name={props.name}
        checked={isSelected}
        onChange={handleClick}
      />
      <label htmlFor={`exam-checkbox-danger-${props.name}`}>
        {props.label}
      </label>
    </CheckboxContainer>
  )
}

export default Checkbox

export const CheckboxContainer = styled.div`
  user-select: none;
  display: flex;
  align-items: center;

  input {
    cursor: pointer;
    position: relative;
    display: inline-block;
    appearance: none;
    width: 22px;
    height: 22px;
    line-height: 22px;
    text-align: center;
    border: 2px solid ${({ theme }) => theme.palette.deepred01};
    border-radius: 2px;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1) 0s;
    box-shadow: ${props => props.theme.shadows.darkShadow};

    &::after {
      content: '';
      display: inline-block;
      width: 5px;
      height: 10px;
      border-radius: 2px;
      border-color: ${({ theme }) => theme.palette.inactive};
      border-width: 0 3px 3px 0;
      border-style: solid;
      transform: rotate(45deg);
      position: absolute;
      top: 1px;
      left: 5px;
    }
  }

  input:checked {
    background-color: ${({ theme }) => theme.palette.deepred01};

    &::after {
      border-color: ${({ theme }) => theme.palette.biege};
    }
  }

  label {
    margin-left: 16px;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: -0.1px;
    color: ${({ theme }) => theme.palette.deepred01};
    font-family: ${({ theme }) => theme.typography.fontFamilyTertiary};
    cursor: pointer;
  }
`
