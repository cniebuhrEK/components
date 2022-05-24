// Input/Input.tsx - Input field component

import React from 'react'
import styled from 'styled-components'
import { isNotNilOrEmpty } from '../../utils/ramda'

import SpyglassIcon from '../../icons/Spyglass'
import EyeIcon from '../../icons/Eye'
import HideIcon from '../../icons/Hide'
import CloseIcon from '../../icons/Close'

export const INPUT_SIZES = {
  normal: 'normal',
  small: 'small'
}

interface InputProps {
  name?: string
  id?: string
  label?: string
  required?: boolean
  disabled?: boolean
  disableTyping?: boolean
  type?: string
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
  size?: string
  initialValue?: string
  icon?: JSX.Element
  [x: string]: any
}

const InputField = (props: InputProps): JSX.Element => {
  const {
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
    size,
    disableTyping,
    hasClearType,
    ...rest
  } = props

  // Current value of the inputn field
  const [inputValue, setInputValue] = React.useState(value)
  // Current type of the input field
  const [inputType, setInputType] = React.useState(type)

  const handleOnChange = (e: any) => {
    e.preventDefault()
    if (!disableTyping) {
      setInputValue(e.target.value)
      onChange(e)
    }
  }

  React.useEffect(() => {
    setInputValue(value)
  }, [value])

  const previewPassword = () => setInputType('text')
  const hidePassword = () => setInputType('password')
  const isPasswordVisible = () => type === 'password' && inputType === 'text'
  const hasSearchType = () => type === 'search'
  const hasPasswordType = () => type === 'password'

  const resetInputField = () => {
    setInputValue('')
    onChange({ target: { value: '' } })
  }

  return (
    <Container
      hasSearchType={hasSearchType()}
      isDisabled={disabled}
      hasPasswordType={hasPasswordType()}
      isPasswordVisible={isPasswordVisible()}
      hasValue={isNotNilOrEmpty(inputValue) || inputValue === 0}
      error={error}
      size={size}
    >
      {hasSearchType() && (
        <SearchIcon size={size}>
          <SpyglassIcon />
        </SearchIcon>
      )}
      <Input
        size={size}
        id={id || name}
        type={inputType}
        value={inputValue}
        hasPasswordType={hasPasswordType()}
        ref={inputRef}
        name={name}
        required={required}
        disabled={disabled}
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        onChange={handleOnChange}
        onFocus={onFocus}
        onBlur={onBlur}
        // @ts-ignore
        onWheel={(e: any) => e.target.blur()}
        {...inputProps}
        {...rest}
      />
      {hasClearType && (
        <ClearIcon onClick={resetInputField}>
          <CloseIcon />
        </ClearIcon>
      )}
      <Label
        isDisabled={disabled}
        size={size}
        htmlFor={name}
        error={error}
        hasSearchType={hasSearchType()}
        hasValue={isNotNilOrEmpty(inputValue) || inputValue === 0}
      >
        {label}
        {isNotNilOrEmpty(label) && required && ' *'}
      </Label>
      <Errors error={error}>{errorText}</Errors>
      <PasswordIcon
        size={size}
        hasPasswordType={hasPasswordType()}
        isPasswordVisible={isPasswordVisible()}
      >
        <EyeIcon
          className='input-container__toggle-visibility--hide'
          onClick={hidePassword}
        />
        <HideIcon
          className='input-container__toggle-visibility--show'
          onClick={previewPassword}
        />
      </PasswordIcon>
    </Container>
  )
}

const Label = styled.label`
  box-sizing: border-box;
  color: ${({ theme, error, isDisabled }) => {
    switch (true) {
      case isDisabled:
        return theme.colors.inputs.disabled.font
      case error:
        return theme.colors.main.error500
      default:
        return theme.colors.inputs.input.font
    }
  }};
  position: absolute;
  font-size: ${({ hasValue, size }) => {
    switch (true) {
      case hasValue:
        return '12px'
      case size === INPUT_SIZES.small:
      default:
        return '14px'
    }
  }};
  line-height: ${({ hasValue }) => (hasValue ? '12px' : '14px')};
  left: ${({ hasValue, hasSearchType }) => {
    switch (true) {
      case !hasValue && hasSearchType:
        return '40px'
      case hasValue:
        return '-6px'
      default:
        return '14px'
    }
  }};
  top: ${({ hasValue, size }) => {
    switch (true) {
      case hasValue:
        return '-19px'
      case size === INPUT_SIZES.small:
        return '8px'
      default:
        return '14px'
    }
  }};
  z-index: 1;
  padding: ${({ hasValue }) => (hasValue ? '0 5px' : '0')};
  background-color: transparent;
  transition: all 200ms ${({ theme }) => theme.transitions.easing.easeInOut} 0ms;
`

const Input = styled.input`
  position: relative;
  z-index: 2;
  font-size: ${({ size, theme }) => {
    switch (true) {
      case size === INPUT_SIZES.small:
        return theme.typography.inputSmall
      default:
        return theme.typography.fontSizeNormal
    }
  }};
  background-color: transparent;
  border: none;
  color: ${({ theme, error, disabled }) => {
    switch (true) {
      case disabled:
        return theme.colors.inputs.disabled.font
      case error:
        return theme.colors.main.error500
      default:
        return theme.colors.inputs.input.font
    }
  }};
  padding: 0;
  margin: 0;
  outline: none;
  cursor: text;
  width: ${({ hasPasswordType }) =>
    hasPasswordType ? 'calc(100% - 20px)' : '100%'};

  &:-webkit-autofill {
    color: ${({ theme }) => theme.colors.inputs.input.font} !important;
    background-color: unset;
    box-shadow: 0 0 0px 1000px
      ${({ theme }) => theme.colors.inputs.input.background} inset;
    height: 100%;
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.inputs.disabled.font} !important;
    cursor: not-allowed;
  }

  &::placeholder,
  &:-ms-input-placeholder,
  &::-ms-input-placeholder {
    color: ${({ theme }) =>
      theme.colors.inputs.input.fontPlaceholder} !important;
    font-size: 11px;
    line-height: 16px;
  }
`

const Errors = styled.div`
  display: ${({ error }) => (error ? 'block' : 'none')};
  color: ${({ theme }) => theme.colors.main.error500};
  font-size: 12px;
  position: absolute;
  left: -1px;
  bottom: -20px;
  white-space: nowrap;
`

const PasswordIcon = styled.div`
  display: ${({ hasPasswordType }) => (hasPasswordType ? 'flex' : 'none')};
  color: ${({ theme }) => theme.colors.inputs.input.font};
  cursor: pointer;
  position: absolute;
  right: 14px;
  top: 0;
  font-size: 20px;
  height: ${({ theme, size }) =>
    size === INPUT_SIZES.normal
      ? theme.dimensions.inputHeight
      : theme.dimensions.inputSmallHeight};
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
`

const SearchIcon = styled.div`
  margin-right: 12px;
  width: 14px;
  height: 14px;
  font-size: ${({ size, theme }) => {
    switch (true) {
      case size === INPUT_SIZES.small:
        return theme.typography.fontSizeSmall
      default:
        return theme.typography.fontSizeNormal
    }
  }};
`

const Container = styled.div`
  align-items: center;
  background-color: ${({ theme, isDisabled }) =>
    isDisabled
      ? theme.colors.inputs.disabled.background
      : theme.colors.inputs.input.background};
  box-sizing: border-box;
  color: ${({ theme, error, isDisabled }) => {
    switch (true) {
      case isDisabled:
        return theme.colors.inputs.disabled.font
      case error:
        return theme.colors.main.error500
      default:
        return theme.colors.inputs.input.font
    }
  }};
  display: inline-flex;
  border-color: ${({ error, isDisabled, theme }) => {
    switch (true) {
      case error:
        return theme.colors.main.error500
      case isDisabled:
        return theme.colors.inputs.disabled.border
      default:
        return theme.colors.inputs.input.border
    }
  }};
  border-radius: ${({ theme }) => theme.shape.borderRadiusNormal};
  border-style: solid;
  border-width: 1px;
  font-size: ${({ size, theme }) => {
    switch (true) {
      case size === INPUT_SIZES.small:
        return theme.typography.inputSmall
      default:
        return theme.typography.fontSizeNormal
    }
  }};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  height: ${({ theme, size }) =>
    size === INPUT_SIZES.normal
      ? theme.dimensions.inputHeight
      : theme.dimensions.inputSmallHeight};
  margin: ${({ hasSearchType }) => (hasSearchType ? 0 : '25px 0 15px')};
  padding: 0 16px;
  position: relative;
  transition: all 200ms ${({ theme }) => theme.transitions.easing.easeInOut} 0ms;
  width: 100%;

  &:hover {
    border-color: ${({ error, isDisabled, theme }) => {
      switch (true) {
        case error:
          return theme.colors.main.error500
        case isDisabled:
          return theme.colors.inputs.disabled.borderActive
        default:
          return theme.colors.inputs.input.borderActive
      }
    }};
  }

  &:focus-within {
    border-width: 1px;
    border-color: ${({ theme, error, isDisabled }) => {
      switch (true) {
        case isDisabled:
          return theme.colors.inputs.disabled.borderActive
        case error:
          return theme.colors.main.error500
        default:
          return theme.colors.inputs.input.borderActive
      }
    }};
    color: ${({ theme, error, isDisabled }) => {
      switch (true) {
        case isDisabled:
          return theme.colors.inputs.disabled.fontActive
        case error:
          return theme.colors.main.error500
        default:
          return theme.colors.inputs.input.fontActive
      }
    }};
  }

  &:focus-within ${Label} {
    font-size: 12px;
    line-height: 12px;
    left: ${({ hasValue }) => (hasValue ? '-6px' : '-1px')};
    top: -19px;
    background-color: transparent;
    color: ${({ theme, error, isDisabled }) => {
      switch (true) {
        case isDisabled:
          return theme.colors.inputs.disabled.fontActive
        case error:
          return theme.colors.main.error500
        default:
          return theme.colors.inputs.input.fontActive
      }
    }};
  }
`

InputField.defaultProps = {
  label: '',
  required: false,
  disabled: false,
  type: 'text',
  size: INPUT_SIZES.normal,
  autoComplete: 'false',
  autoFocus: false,
  onChange: () => {},
  onFocus: () => {},
  onBlur: () => {},
  inputProps: {}
}

const ClearIcon = styled.div`
  position: absolute;
  top: 9px;
  right: 10px;
  z-index: 1;
  cursor: pointer;
`

export default InputField
