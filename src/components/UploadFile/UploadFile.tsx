import React from 'react'
import * as R from 'ramda'
import styled from 'styled-components'
import { isNilOrEmpty, isNotNilOrEmpty } from '../../utils/ramda'
import { AttachmentIcon } from '../../icons'

interface UploadFileProps {
  disabled?: boolean
  onChange: (e: any) => any
  reset: boolean
  id: string
  label: string | JSX.Element
  required?: boolean
  error?: boolean
  errorText?: string
  filename?: string
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
    disabled,
    filename
  } = props
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

  const handleClick = () => {
    const inputElement = document.getElementById(id)
    inputElement && inputElement.click()
  }

  const getFilenameIfExists =
    isNotNilOrEmpty(filename) && isNilOrEmpty(file) ? filename : ''

  return (
    <UploadFileContainer
      error={error}
      isDisabled={disabled}
      hasValue={isNotNilOrEmpty(file)}
      onClick={handleClick}
    >
      <div className='file-upload__wrapper'>
        <div className='file-upload__trigger'>
          <div className='file-upload__label'>
            {label}
            {required && ' *'}
          </div>
          <div className='file-upload__name'>
            {R.propOr('', 'name', file)}
            {/* @ts-ignore */}
            {getFilenameIfExists()}
          </div>
        </div>
        <input
          disabled={disabled}
          className='file-upload__input'
          id={id}
          onChange={handleOnChange}
          type='file'
        />
        <div className='file-upload__icon'>
          <AttachmentIcon />
        </div>
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
    display: flex;
    align-items: center;
    background-color: ${({ theme, isDisabled }) =>
      isDisabled
        ? theme.colors.inputs.disabled.background
        : theme.colors.inputs.input.background};
    box-sizing: border-box;
    border-style: solid;
    border-radius: ${({ theme }) => theme.shape.borderRadiusNormal};
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
    border-width: 1px;
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
  }

  .file-upload__trigger {
    display: inline-flex;
    align-items: center;
    max-width: calc(100% - 25px - 16px);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    float: left;
    min-width: 0;
  }

  .file-upload__name {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: inline-block;
    float: left;
    min-width: 0;
  }

  .file-upload__label {
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
  }

  .file-upload__icon {
    position: absolute;
    right: 25px;
    top: 0;
    font-size: 22px;
    color: ${({ theme }) => theme.colors.main.primary500};
    line-height: ${({ theme }) => theme.dimensions.inputHeight};
  }

  .file-upload__error {
    display: ${({ error }) => (error ? 'block' : 'none')};
    color: ${({ theme }) => theme.colors.main.error500};
    font-size: 12px;
    position: absolute;
    left: -1px;
    bottom: -20px;
    white-space: nowrap;
  }
`

UploadFile.defaultProps = {}

export default UploadFile
