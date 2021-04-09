import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { isNotNilOrEmpty } from '../utils/ramda'

import EyeIcon from '../icons/Eye'
import HideIcon from '../icons/Hide'

interface InputProps {
  name?: string
  id?: string
  label?: string
  required?: boolean
  disabled?: boolean
  type?: string
  autoComplete?: any
  autoFocus?: any
  value?: string | number
  error?: boolean
  inputProps?: object
  inputRef?: any
  onChange: (e) => any
  onFocus?: (e) => any
  onBlur?: (e) => any
  errorText?: string
}

const Input = ({
  name,
  id,
  label,
  required,
  disabled,
  type,
  autoComplete,
  autoFocus,
  value,
  error,
  inputProps,
  inputRef,
  onChange,
  onFocus,
  onBlur,
  errorText,
}: InputProps): JSX.Element => {
  const [inputValue, setInputValue] = useState(value)
  const [inputType, setInputType] = useState(type)

  const handleOnChange = e => {
    e.preventDefault()
    setInputValue(e.target.value)
    onChange(e)
  }

  useEffect(() => {
    setInputValue(value)
  }, [value])

  const previewPassword = () => setInputType('text')
  const hidePassword = () => setInputType('password')

  return (
    <InputContainer
      isDisabled={disabled}
      hasPasswordType={type === 'password'}
      isPasswordVisible={type === 'password' && inputType === 'text'}
      hasValue={isNotNilOrEmpty(inputValue) || inputValue === 0}
      error={error}
    >
      <input
        className='input-container__input'
        value={value}
        ref={inputRef}
        id={id || name}
        name={name}
        required={required}
        disabled={disabled}
        type={inputType}
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        onChange={handleOnChange}
        onFocus={onFocus}
        onBlur={onBlur}
        {...inputProps}
      />
      <label htmlFor={name} className='input-container__label'>
        {label}
        {required && ' *'}
      </label>
      <div className='input-container__error'>{errorText}</div>
      <div className='input-container__toggle-visibility'>
        <EyeIcon
          className='input-container__toggle-visibility--hide'
          onClick={hidePassword}
        />
        <HideIcon
          className='input-container__toggle-visibility--show'
          onClick={previewPassword}
        />
      </div>
    </InputContainer>
  )
}

export const InputContainer = styled.div`
  display: inline-flex;
  align-items: center;
  width: 100%;
  margin: 25px 0 21px;
  box-sizing: border-box;
  position: relative;
  height: ${props => props.theme.dimensions.inputHeight};
  border-width: 1px;
  border-style: solid;
  border-radius: ${props => props.theme.shape.borderRadiusNormal};
  border-color: ${props =>
    props.error ? props.theme.palette.red05 : 'transparent'};
  padding: 0 16px;
  font-size: ${props => props.theme.typography.fontSizeNormal};
  font-family: ${props => props.theme.typography.fontFamily};
  transition: all 200ms ${props => props.theme.transitions.easing.easeInOut} 0ms;
  background-color: ${props => props.theme.palette.grey09};
  color: ${props =>
    props.error ? props.theme.palette.red05 : props.theme.palette.brown01};

  &:hover {
    border-color: ${props => {
      switch (true) {
        case props.error:
          return props.theme.palette.red05
        case props.isDisabled:
          return 'transparent'
        default:
          return props.theme.palette.brown01
      }
    }};
  }

  &:focus-within {
    border-width: 1px;
    border-color: ${props =>
      props.error ? props.theme.palette.red05 : props.theme.palette.orange04};
    color: ${props =>
      props.error ? props.theme.palette.red05 : props.theme.palette.brown01};
  }

  .input-container__label {
    box-sizing: border-box;
    color: ${props =>
      props.error ? props.theme.palette.red05 : props.theme.palette.brown01};
    position: absolute;
    font-size: ${props => (props.hasValue ? '12px' : '16px')};
    line-height: ${props => (props.hasValue ? '12px' : '16px')};
    left: ${props => (props.hasValue ? '-6px' : '14px')};
    top: ${props => (props.hasValue ? '-19px' : '14px')};
    z-index: 1;
    padding: ${props => (props.hasValue ? '0 5px' : '0')};
    background-color: transparent;
    transition: all 200ms ${props => props.theme.transitions.easing.easeInOut}
      0ms;
  }

  &:focus-within .input-container__label {
    font-size: 12px;
    line-height: 12px;
    left: ${props => (props.hasValue ? '-6px' : '-1px')};
    top: -19px;
    background-color: transparent;
    color: ${props =>
      props.error ? props.theme.palette.red05 : props.theme.palette.brown01};
  }

  .input-container__input {
    position: relative;
    z-index: 2;
    font-size: ${props => props.theme.typography.fontSizeNormal};
    background-color: transparent;
    border: none;
    color: ${props => props.theme.palette.brown01};
    padding: 0;
    margin: 0;
    outline: none;
    cursor: ${props => (props.isDisabled ? 'not-allowed' : 'text')};
    width: ${props => (props.hasPasswordType ? 'calc(100% - 20px)' : '100%')};
  }

  input:-webkit-autofill {
    color: ${props => props.theme.palette.brown01} !important;
    background-color: unset;
    box-shadow: 0 0 0px 1000px ${props => props.theme.palette.grey09} inset;
    height: 100%;
  }

  .input-container__input:disabled {
    color: ${props => props.theme.palette.brown01};
  }

  .input-container__error {
    display: ${props => (props.error ? 'block' : 'none')};
    color: ${props => props.theme.palette.red05};
    font-size: 12px;
    position: absolute;
    left: -1px;
    bottom: -20px;
    white-space: nowrap;
  }

  .input-container__toggle-visibility {
    display: ${props => (props.hasPasswordType ? 'flex' : 'none')};
    color: ${props => props.theme.palette.brown01};
    cursor: pointer;
    position: absolute;
    right: 14px;
    top: 0;
    font-size: 20px;
    height: ${props => props.theme.dimensions.inputHeight};
    align-items: center;
    transition: color 200ms ${props => props.theme.transitions.easing.easeInOut}
      0ms;

    &:hover {
      cursor: pointer;
    }

    .input-container__toggle-visibility--hide {
      transition: opacity 200ms
        ${props => props.theme.transitions.easing.easeInOut} 0ms;
      position: absolute;
      right: 0;
      opacity: ${props => (props.isPasswordVisible ? '1' : '0')};
      z-index: ${props => (props.isPasswordVisible ? '1' : '0')};
    }

    .input-container__toggle-visibility--show {
      transition: opacity 200ms
        ${props => props.theme.transitions.easing.easeInOut} 0ms;
      position: absolute;
      right: 0;
      opacity: ${props => (props.isPasswordVisible ? '0' : '1')};
      z-index: ${props => (props.isPasswordVisible ? '0' : '1')};
    }
  }
`

Input.defaultProps = {
  label: '',
  required: false,
  disabled: false,
  type: 'text',
  autoComplete: 'false',
  autoFocus: false,
  onChange: () => {},
  onFocus: () => {},
  onBlur: () => {},
  inputProps: {}
}

export default Input
