// Textarea/Textarea.tsx - Textarea field component

import React from 'react'
import styled from 'styled-components'
import { isNotNilOrEmpty } from '../../utils/ramda'

interface TextareaProps {
  name?: string
  id?: string
  label?: string
  required?: boolean
  disabled?: boolean
  autoComplete?: any
  autoFocus?: any
  value?: string
  maxHeight?: string
  error?: boolean
  inputProps?: object
  inputRef?: any
  onChange: (e: any) => any
  onFocus?: (e: any) => any
  onBlur?: (e: any) => any
  errorText?: string
  [x: string]: any
}

// TextareaField is a React wrapper for textarea elements.
const TextareaField = (props: TextareaProps): JSX.Element => {
  const {
    name,
    id,
    label,
    required,
    disabled,
    autoComplete,
    autoFocus,
    value,
    error,
    maxHeight,
    inputProps,
    inputRef,
    errorText,
    size,
    onChange,
    onFocus,
    onBlur,
    ...rest
  } = props

  // Current value of the input field
  const [inputValue, setInputValue] = React.useState<string | undefined>(value)

  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault()
    setInputValue(e.target.value)
    onChange(e)
  }

  React.useEffect(() => {
    setInputValue(value)
  }, [value])

  return (
    <Container
      isDisabled={disabled}
      maxHeight={maxHeight}
      hasValue={isNotNilOrEmpty(inputValue)}
      error={error}
    >
      <Textarea
        id={id || name}
        value={value}
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
      <Label
        size={size}
        htmlFor={name}
        error={error}
        hasValue={isNotNilOrEmpty(inputValue)}
      >
        {label}
        {required && ' *'}
      </Label>
      <Errors error={error}>{errorText}</Errors>
    </Container>
  )
}

TextareaField.defaultProps = {
  label: '',
  required: false,
  disabled: false,
  autoComplete: 'false',
  autoFocus: false,
  maxHeight: '100px',
  onChange: () => {},
  onFocus: () => {},
  onBlur: () => {},
  inputProps: {}
}

const Label = styled.label`
  background-color: transparent;
  box-sizing: border-box;
  color: ${({ error, theme }) =>
    error ? theme.palette.red05 : theme.palette.brown01};
  font-size: 14px;
  line-height: 14px;
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
  padding: ${({ hasValue }) => (hasValue ? '0 5px' : '0')};
  position: absolute;
  top: ${({ hasValue }) => {
    switch (true) {
      case hasValue:
        return '-19px'
      default:
        return '14px'
    }
  }};
  transition: all 200ms ${({ theme }) => theme.transitions.easing.easeInOut} 0ms;
  z-index: 1;
`

const Textarea = styled.textarea`
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.palette.textDark};
  cursor: text;
  font-size: ${({ theme }) => theme.typography.fontSizeSmall};
  height: 100%;
  margin: 0;
  outline: none;
  padding: 0;
  position: relative;
  resize: none;
  width: 100%;
  z-index: 2;

  &:-webkit-autofill {
    color: ${({ theme }) => theme.palette.textDark} !important;
    background-color: unset;
    box-shadow: 0 0 0px 1000px ${({ theme }) => theme.palette.panelBackground}
      inset;
    height: 100%;
  }

  &:disabled {
    color: ${({ theme }) => theme.palette.disabledFont};
    cursor: 'not-allowed';
  }
`

const Errors = styled.div`
  display: ${({ error }) => (error ? 'block' : 'none')};
  color: ${({ theme }) => theme.palette.red05};
  font-size: 12px;
  position: absolute;
  left: -1px;
  bottom: -20px;
  white-space: nowrap;
`

const Container = styled.div`
  background-color: ${({ theme, isDisabled }) =>
    isDisabled
      ? theme.palette.disabledBackground
      : theme.palette.panelBackground};
  box-sizing: border-box;
  border-color: ${({ theme, error }) =>
    error ? theme.palette.red05 : theme.palette.border};
  border-radius: ${({ theme }) => theme.shape.borderRadiusNormal};
  border-style: solid;
  border-width: 1px;
  color: ${({ theme, error }) =>
    error ? theme.palette.red05 : theme.palette.textDark};
  display: block;
  font-size: ${({ theme }) => theme.typography.fontSizeNormal};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  height: ${({ maxHeight }) => maxHeight};
  margin: 25px 0 21px;
  padding: 16px;
  position: relative;
  transition: all 200ms ${({ theme }) => theme.transitions.easing.easeInOut} 0ms;
  width: 100%;

  &:hover {
    border-color: ${({ error, isDisabled, theme }) => {
      switch (true) {
        case error:
          return theme.palette.red05
        case isDisabled:
          return theme.palette.border
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
      error ? theme.palette.red05 : theme.palette.textDark};
  }

  &:focus-within ${Label} {
    font-size: 12px;
    line-height: 12px;
    left: ${({ hasValue }) => (hasValue ? '-6px' : '-1px')};
    top: -19px;
    background-color: transparent;
    color: ${({ error, theme }) =>
      error ? theme.palette.red05 : theme.palette.textDark};
  }
`

export default TextareaField
