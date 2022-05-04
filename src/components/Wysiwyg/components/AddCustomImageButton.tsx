// Wysiwyg/Wysiwyg.tsx - Wysiwyg component

import React, { useState } from 'react'
import styled from 'styled-components'
import { EditorImageIcon } from '../../../icons'
import * as R from 'ramda'

import { CUSTOM_IMAGE_BLOT_NAME, addImageBlotToQuill } from './../customBlots'
import { Loader } from '../../Loader'

interface AddCustomImageButtonProps {
  editorInstance: any
  id: string
  handleS3Upload: (e: any) => void
}

const AddCustomImageButton = (
  props: AddCustomImageButtonProps
): JSX.Element => {
  const { editorInstance, id, handleS3Upload } = props
  const [isLoading, setIsLoading] = useState(false)

  React.useEffect(() => {
    addImageBlotToQuill()
  }, [])

  const addImage = (url, id) => {
    const selection = editorInstance.getSelection()
    const index = R.propOr(1, 'index', selection)

    editorInstance.insertEmbed(index, CUSTOM_IMAGE_BLOT_NAME, {
      url,
      id
    })
  }

  const onTriggerClick = () => {
    // @ts-ignore
    document.getElementById(`${id}-s3-upload`).click()
  }

  const handleOnChange = async (e: any) => {
    e.preventDefault()
    setIsLoading(true)
    const response = await handleS3Upload(e.target.files[0])
    const data = R.propOr({ url: '', id: '' }, 'data', response)

    addImage(data.url, data.id)
    setIsLoading(false)
  }

  return (
    <ButtonContainer isLoading={isLoading}>
      <button
        disabled={isLoading}
        className='ql-s3-image'
        onMouseDown={onTriggerClick}
      >
        {isLoading ? (
          <div className='loader-container'>
            <Loader />
          </div>
        ) : (
          <EditorImageIcon />
        )}
      </button>
      <input
        className='file-upload__input'
        id={`${id}-s3-upload`}
        onChange={handleOnChange}
        type='file'
      />
    </ButtonContainer>
  )
}

export default AddCustomImageButton

const ButtonContainer = styled.div`
  display: inline-block;

  * {
    color: ${({ theme, isLoading }) =>
      isLoading
        ? theme.colors.buttons.contained.disabled.font
        : theme.colors.buttons.contained.secondary.font} !important;
    transition: all 800ms ${({ theme }) => theme.transitions.easing.easeInOut}
      0ms;
  }

  button {
    cursor: pointer !important;
    background: ${({ theme, isLoading }) =>
      isLoading
        ? theme.colors.buttons.contained.disabled.background
        : theme.colors.buttons.contained.secondary.background} !important;
    color: ${({ theme, isLoading }) =>
      isLoading
        ? theme.colors.buttons.contained.disabled.font
        : theme.colors.buttons.contained.secondary.font} !important;
    width: 19px !important;
    height: 19px !important;
    line-height: 19px !important;
    border-radius: 2px !important;
    font-size: 12px !important;
    padding: 0 !important;
    text-align: center !important;
    transition: all 800ms ${({ theme }) => theme.transitions.easing.easeInOut}
      0ms;
    margin: 0 3px !important;

    svg {
      float: unset !important;
      color: ${({ theme, isLoading }) =>
        isLoading
          ? theme.colors.buttons.contained.disabled.font
          : theme.colors.buttons.contained.secondary.font} !important;
    }
  }

  &:hover {
    * {
      color: ${({ theme, isLoading }) =>
        isLoading
          ? theme.colors.buttons.contained.disabled.fontActive
          : theme.colors.buttons.contained.secondary.fontActive} !important;
    }

    button {
      background: ${({ theme, isLoading }) =>
        isLoading
          ? theme.colors.buttons.contained.disabled.backgroundActive
          : theme.colors.buttons.contained.secondary
              .backgroundActive} !important;
      color: ${({ theme, isLoading }) =>
        isLoading
          ? theme.colors.buttons.contained.disabled.fontActive
          : theme.colors.buttons.contained.secondary.fontActive} !important;

      svg {
        float: unset !important;
        color: ${({ theme, isLoading }) =>
          isLoading
            ? theme.colors.buttons.contained.disabled.fontActive
            : theme.colors.buttons.contained.secondary.fontActive} !important;
      }
    }
  }

  input[type='file'] {
    display: none;
  }

  .loader-container {
    transform: scale(0.5);
    display: flex;
    justify-content: center;
  }
`
