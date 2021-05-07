import React, { useState, useEffect } from 'react'
import { propOr } from 'ramda'
import styled from 'styled-components'
import { isNotNilOrEmpty } from '../utils/ramda'

interface UploadFileProps {
  disabled?: boolean
  onChange: (e) => any
  reset: boolean
  id: string
  label: string | JSX.Element
  required?: boolean
  error?: boolean
  errorText?: string
}

const UploadFile = (props: UploadFileProps): JSX.Element => {
  const {
    onChange,
    reset,
    id,
    label,
    required,
    errorText,
    error,
    disabled
  } = props
  const [file, setFile] = useState(null)

  useEffect(() => {
    if (reset) {
      setFile(null)
    }
  }, [reset])

  const handleOnChange = e => {
    e.preventDefault()
    setFile(e.target.files[0])
    onChange(e.target.files[0])
  }

  return (
    <UploadFileContainer
      error={error}
      disabled={disabled}
      hasValue={isNotNilOrEmpty(file)}
    >
      <div className='file-upload__wrapper'>
        <label htmlFor={id} className='file-upload__trigger'>
          <div className='file-upload__label'>
            {label}
            {required && ' *'}
          </div>
          <span className='file-upload__name'>{propOr('', 'name', file)}</span>
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
    transition: all 200ms ${props => props.theme.transitions.easing.easeInOut}
      0ms;
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
  }

  .file-upload__trigger {
    display: inline-flex;
    align-items: center;
  }

  .file-upload__name {
    color: ${props => props.theme.palette.brown01};
  }

  .file-upload__label {
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

  &:focus-within .file-upload__label {
    font-size: 12px;
    line-height: 12px;
    left: ${props => (props.hasValue ? '-6px' : '-1px')};
    top: -19px;
    background-color: transparent;
    color: ${props =>
      props.error ? props.theme.palette.red05 : props.theme.palette.brown01};
  }

  .file-upload__error {
    display: ${props => (props.error ? 'block' : 'none')};
    color: ${props => props.theme.palette.red05};
    font-size: 12px;
    position: absolute;
    left: -1px;
    bottom: -20px;
    white-space: nowrap;
  }
`

UploadFile.defaultProps = {}

export default UploadFile
