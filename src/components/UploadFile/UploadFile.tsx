// UploadFile/UploadFile.tsx - File input component

import React from 'react'
import * as R from 'ramda'
import styled from 'styled-components'
import { isNotNilOrEmpty } from '../../utils/ramda'

interface UploadFileProps {
  disabled?: boolean
  onChange: (e: any) => any
  reset: boolean
  id: string
  label: string | JSX.Element
  required?: boolean
  error?: boolean
  errorText?: string
}

const UploadFile = (props: UploadFileProps): JSX.Element => {
  const { onChange, reset, id, label, required, errorText, error, disabled } =
    props
  const [file, setFile] = React.useState(null)

  React.useEffect(() => {
    if (reset) {
      setFile(null)
    }
  }, [reset])

  const handleOnChange = (e: any) => {
    e.preventDefault()
    setFile(e.target.files[0])
    onChange(e.target.files[0])
  }

  return (
    <UploadFileContainer
      error={error}
      isDisabled={disabled}
      hasValue={isNotNilOrEmpty(file)}
    >
      <div className='file-upload__wrapper'>
        <label htmlFor={id} className='file-upload__trigger'>
          <div className='file-upload__label'>
            {label}
            {required && ' *'}
          </div>
          <span className='file-upload__name'>
            {R.propOr('', 'name', file)}
          </span>
        </label>
        <input
          disabled={disabled}
          className='file-upload__input'
          id={id}
          onChange={handleOnChange}
          type='file'
        />
        <div className='file-upload__error'>{errorText}</div>
      </div>
    </UploadFileContainer>
  )
}

export const UploadFileContainer = styled.div`
  input[type='file'] {
    display: none;
  }

  .file-upload__wrapper {
    align-items: center;
    background-color: ${({ theme, isDisabled }) =>
      isDisabled ? theme.palette.grey08 : theme.palette.grey09};
    box-sizing: border-box;
    border-style: solid;
    border-radius: ${({ theme }) => theme.shape.borderRadiusNormal};
    border-color: ${({ error, theme }) =>
      error ? theme.palette.red05 : 'transparent'};
    border-width: 1px;
    color: ${({ error, theme }) =>
      error ? theme.palette.red05 : theme.palette.brown01};
    display: inline-flex;
    font-size: ${({ theme }) => theme.typography.fontSizeNormal};
    font-family: ${({ theme }) => theme.typography.fontFamily};
    height: ${({ theme }) => theme.dimensions.inputHeight};
    margin: 25px 0 21px;
    padding: 0 16px;
    position: relative;
    transition: all 200ms ${({ theme }) => theme.transitions.easing.easeInOut}
      0ms;
    user-select: ${({ isDisabled }) => (isDisabled ? 'none' : 'initial')};
    width: 100%;

    &:hover {
      border-color: ${({ theme, error, isDisabled }) => {
        switch (true) {
          case error:
            return theme.palette.red05
          case isDisabled:
            return 'transparent'
          default:
            return theme.palette.brown01
        }
      }};
    }
  }

  .file-upload__trigger {
    display: inline-flex;
    align-items: center;
  }

  .file-upload__name {
    color: ${({ theme }) => theme.palette.brown01};
  }

  .file-upload__label {
    box-sizing: border-box;
    color: ${({ theme, error }) =>
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

  &:focus-within .file-upload__label {
    font-size: 12px;
    line-height: 12px;
    left: ${({ hasValue }) => (hasValue ? '-6px' : '-1px')};
    top: -19px;
    background-color: transparent;
    color: ${({ error, theme }) =>
      error ? theme.palette.red05 : theme.palette.brown01};
  }

  .file-upload__error {
    display: ${({ error }) => (error ? 'block' : 'none')};
    color: ${({ theme }) => theme.palette.red05};
    font-size: 12px;
    position: absolute;
    left: -1px;
    bottom: -20px;
    white-space: nowrap;
  }
`

UploadFile.defaultProps = {}

export default UploadFile
