// UploadFileTrigger/UploadFileTrigger.tsx - File input component

import React from 'react'
import styled from 'styled-components'

interface UploadFileTriggerProps {
  disabled?: boolean
  onChange: (e: any) => any
  id: string
  label: string | JSX.Element
  children: string | JSX.Element | JSX.Element[]
}

const UploadFileTrigger = (props: UploadFileTriggerProps): JSX.Element => {
  const { onChange, id, disabled, children } = props

  const handleOnChange = (e: any) => {
    e.preventDefault()

    if (!disabled) {
      onChange(e.target.files[0])
    }
  }

  return (
    <UploadFileTriggerContainer>
      <label htmlFor={id} className='file-upload__trigger'>
        {children}
      </label>
      <input
        disabled={disabled}
        className='file-upload__input'
        id={id}
        onChange={handleOnChange}
        type='file'
      />
    </UploadFileTriggerContainer>
  )
}

export const UploadFileTriggerContainer = styled.div`
  input[type='file'] {
    display: none;
  }

  .file-upload__trigger {
    display: inline-flex;
    align-items: center;
  }
`

UploadFileTrigger.defaultProps = {}

export default UploadFileTrigger
