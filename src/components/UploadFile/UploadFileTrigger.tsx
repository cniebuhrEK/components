// UploadFileTrigger/UploadFileTrigger.tsx - File input component

import React from 'react'
import styled from 'styled-components'

interface UploadFileTriggerProps {
  disabled?: boolean
  onChange: (e: any) => any
  id: string
  children: string | JSX.Element | JSX.Element[]
}

const UploadFileTrigger = (props: UploadFileTriggerProps): JSX.Element => {
  const { onChange, id, disabled, children } = props

  const handleClick = (e: any) => {
    e.target.value = null
  }

  const handleOnChange = (e: any) => {
    e.preventDefault()

    if (!disabled) {
      onChange(e.target.files[0])
    }
  }

  const onTriggerClick = () => {
    // @ts-ignore
    document.getElementById(id).click()
  }

  return (
    <UploadFileTriggerContainer>
      <div onClick={onTriggerClick}>{children}</div>
      <input
        disabled={disabled}
        className='file-upload__input'
        id={id}
        onChange={handleOnChange}
        onClick={handleClick}
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
    display: block;
  }
`

UploadFileTrigger.defaultProps = {}

export default UploadFileTrigger
