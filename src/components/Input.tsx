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
  value?: string
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
      hasValue={isNotNilOrEmpty(inputValue)}
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
  margin: ${props => (props.error ? '10px 0 23px 0' : '10px 0')};
  box-sizing: border-box;
  position: relative;
  height: ${props => props.theme.dimensions.inputHeight};
  border-width: 1px;
  border-style: solid;
  border-color: ${props =>
    props.error
      ? props.theme.palette.error.main
      : props.theme.palette.common.gray400};
  padding: 0 14px;
  border-radius: ${props => props.theme.shape.borderRadius};
  font-size: 13px;
  font-family: ${props => props.theme.typography.fontFamily};
  transition: all 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  background-color: ${props =>
    props.isDisabled ? props.theme.palette.common.gray100 : 'transparent'};

  &:hover {
    border-color: ${props => {
      switch (true) {
        case props.error:
          return props.theme.palette.error.main
        case props.isDisabled:
          return props.theme.palette.common.gray400
        default:
          return props.theme.palette.text.main
      }
    }};
  }

  &:focus-within {
    border-width: 2px;
    border-color: ${props =>
      props.error
        ? props.theme.palette.error.main
        : props.theme.palette.primary.main};
    color: ${props =>
      props.error
        ? props.theme.palette.error.main
        : props.theme.palette.primary.main};
  }

  .input-container__label {
    box-sizing: border-box;
    color: ${props =>
      props.error
        ? props.theme.palette.error.main
        : props.theme.palette.common.gray400};
    position: absolute;
    font-size: ${props => (props.hasValue ? '10px' : '13px')};
    line-height: ${props => (props.hasValue ? '10px' : '13px')};
    left: 14px;
    top: ${props => (props.hasValue ? '-9px' : '16px')};
    z-index: 1;
    padding: ${props => (props.hasValue ? '0 5px' : '0')};
    background-color: ${props =>
      props.hasValue ? props.theme.palette.background.default : 'transparent'};
    transition: all 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  }

  &:focus-within .input-container__label {
    font-size: 10px;
    line-height: 10px;
    left: 14px;
    top: -9px;
    padding: 0 5px;
    background-color: ${props => props.theme.palette.background.default};
    color: ${props =>
      props.error
        ? props.theme.palette.error.main
        : props.theme.palette.primary.main};
  }

  .input-container__input {
    position: relative;
    z-index: 2;
    font-size: 13px;
    background-color: transparent;
    border: none;
    color: ${props =>
      props.isDisabled
        ? props.theme.palette.common.gray400
        : props.theme.palette.text.main};
    padding: 0;
    margin: 0;
    outline: none;
    width: ${props => (props.hasPasswordType ? 'calc(100% - 20px)' : '100%')};
  }

  input:-webkit-autofill {
    color: ${props => props.theme.palette.text.main} !important;
    background-color: unset;
    box-shadow: 0 0 0px 1000px ${props => props.theme.palette.background.default}
      inset;
    height: 100%;
  }

  .input-container__input:disabled {
    color: ${props => props.theme.palette.common.gray400};
    background-color: transparent;
  }

  .input-container__error {
    display: ${props => (props.error ? 'block' : 'none')};
    color: ${props => props.theme.palette.error.main};
    font-size: 9px;
    position: absolute;
    top: 105%;
    left: 14px;
  }

  .input-container__toggle-visibility {
    display: ${props => (props.hasPasswordType ? 'flex' : 'none')};
    color: ${props => props.theme.palette.common.gray500};
    cursor: pointer;
    position: absolute;
    right: 14px;
    top: 0;
    font-size: 20px;
    height: ${props => props.theme.dimensions.inputHeight};
    align-items: center;
    transition: color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;

    &:hover {
      color: ${props => props.theme.palette.primary.main};
    }

    &:focus {
      color: ${props => props.theme.palette.primary.dark};
    }

    .input-container__toggle-visibility--hide {
      transition: opacity 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
      position: absolute;
      right: 0;
      opacity: ${props => (props.isPasswordVisible ? '1' : '0')};
      z-index: ${props => (props.isPasswordVisible ? '1' : '0')};
    }

    .input-container__toggle-visibility--show {
      transition: opacity 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
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
