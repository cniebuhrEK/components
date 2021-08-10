// Input/Input.tsx - Input field component

import React from 'react'
import styled from 'styled-components'
import { isNotNilOrEmpty } from '../../utils/ramda'

import EyeIcon from '../../icons/Eye'
import HideIcon from '../../icons/Hide'

interface InputProps {
  name?: string
  id?: string
  label?: string
  required?: boolean
  disabled?: boolean
  type?: 'text' | 'password' | 'email'
  autoComplete?: any
  autoFocus?: any
  value?: string | number
  error?: boolean
  inputProps?: object
  inputRef?: any
  onChange: (e: any) => any
  onFocus?: (e: any) => any
  onBlur?: (e: any) => any
  errorText?: string
  [x: string]: any
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
  ...rest
}: InputProps): JSX.Element => {
  // Current value of the inputn field
  const [inputValue, setInputValue] = React.useState(value)
  // Current type of the input field
  const [inputType, setInputType] = React.useState(type)

  const handleOnChange = (e: any) => {
    e.preventDefault()
    setInputValue(e.target.value)
    onChange(e)
  }

  React.useEffect(() => {
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
        // @ts-ignore
        onWheel={e => e.target.blur()}
        {...inputProps}
        {...rest}
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
  align-items: center;
  background-color: ${({ theme, isDisabled }) =>
    isDisabled ? theme.palette.grey08 : theme.palette.background};
  box-sizing: border-box;
  color: ${({ theme, error }) =>
    error ? theme.palette.red05 : theme.palette.darkblue01};
  display: inline-flex;
  border-color: ${({ theme, error }) =>
    error ? theme.palette.red05 : 'transparent'};
  border-radius: ${({ theme }) => theme.shape.borderRadiusNormal};
  border-style: solid;
  border-width: 1px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
  font-size: ${({ theme }) => theme.typography.fontSizeNormal};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  height: ${({ theme }) => theme.dimensions.inputHeight};
  margin: 25px 0 21px;
  padding: 0 16px;
  position: relative;
  transition: all 200ms ${({ theme }) => theme.transitions.easing.easeInOut} 0ms;
  width: 100%;

  &:hover {
    border-color: ${({ error, isDisabled, theme }) => {
      switch (true) {
        case error:
          return theme.palette.red05
        case isDisabled:
          return 'transparent'
        default:
          return theme.palette.orange04
      }
    }};
  }

  &:focus-within {
    border-width: 1px;
    border-color: ${({ error, theme }) =>
      error ? theme.palette.red05 : theme.palette.orange01};
    color: ${({ error, theme }) =>
      error ? theme.palette.red05 : theme.palette.brown01};
  }

  .input-container__label {
    box-sizing: border-box;
    color: ${({ error, theme }) =>
      error ? theme.palette.red05 : theme.palette.brown01};
    position: absolute;
    font-size: ${({ hasValue }) => (hasValue ? '12px' : '16px')};
    line-height: ${({ hasValue }) => (hasValue ? '12px' : '16px')};
    left: ${({ hasValue }) => (hasValue ? '-6px' : '14px')};
    top: ${({ hasValue }) => (hasValue ? '-19px' : '14px')};
    z-index: 1;
    padding: ${({ hasValue }) => (hasValue ? '0 5px' : '0')};
    background-color: transparent;
    transition: all 200ms ${({ theme }) => theme.transitions.easing.easeInOut}
      0ms;
  }

  &:focus-within .input-container__label {
    font-size: 12px;
    line-height: 12px;
    left: ${({ hasValue }) => (hasValue ? '-6px' : '-1px')};
    top: -19px;
    background-color: transparent;
    color: ${({ error, theme }) =>
      error ? theme.palette.red05 : theme.palette.brown01};
  }

  .input-container__input {
    position: relative;
    z-index: 2;
    font-size: ${({ theme }) => theme.typography.fontSizeNormal};
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.palette.brown01};
    padding: 0;
    margin: 0;
    outline: none;
    cursor: ${({ isDisabled }) => (isDisabled ? 'not-allowed' : 'text')};
    width: ${({ hasPasswordType }) =>
      hasPasswordType ? 'calc(100% - 20px)' : '100%'};
  }

  input:-webkit-autofill {
    color: ${({ theme }) => theme.palette.brown01} !important;
    background-color: unset;
    box-shadow: 0 0 0px 1000px ${({ theme }) => theme.palette.grey09} inset;
    height: 100%;
  }

  .input-container__input:disabled {
    color: ${({ theme }) => theme.palette.brown01};
  }

  .input-container__error {
    display: ${({ error }) => (error ? 'block' : 'none')};
    color: ${({ theme }) => theme.palette.red05};
    font-size: 12px;
    position: absolute;
    left: -1px;
    bottom: -20px;
    white-space: nowrap;
  }

  .input-container__toggle-visibility {
    display: ${({ hasPasswordType }) => (hasPasswordType ? 'flex' : 'none')};
    color: ${({ theme }) => theme.palette.darkblue01};
    cursor: pointer;
    position: absolute;
    right: 14px;
    top: 0;
    font-size: 20px;
    height: ${({ theme }) => theme.dimensions.inputHeight};
    align-items: center;
    transition: color 200ms ${({ theme }) => theme.transitions.easing.easeInOut}
      0ms;

    &:hover {
      cursor: pointer;
    }

    .input-container__toggle-visibility--hide {
      transition: opacity 200ms
        ${({ theme }) => theme.transitions.easing.easeInOut} 0ms;
      position: absolute;
      right: 0;
      opacity: ${({ isPasswordVisible }) => (isPasswordVisible ? '1' : '0')};
      z-index: ${({ isPasswordVisible }) => (isPasswordVisible ? '1' : '0')};
    }

    .input-container__toggle-visibility--show {
      transition: opacity 200ms
        ${({ theme }) => theme.transitions.easing.easeInOut} 0ms;
      position: absolute;
      right: 0;
      opacity: ${({ isPasswordVisible }) => (isPasswordVisible ? '0' : '1')};
      z-index: ${({ isPasswordVisible }) => (isPasswordVisible ? '0' : '1')};
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
