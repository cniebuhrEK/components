// Wysiwyg/Wysiwyg.tsx - Wysiwyg component

import React from 'react'
import styled from 'styled-components'
import { EditorHighlightIcon } from '../../icons'

import {
  addAdminHighlightsBlotToQuill,
  ADMIN_HIGHLIGHTS_BLOT_NAME
} from './customBlots'

interface AddAdminHighlightsButtonProps {
  editorInstance: any
}

const AddAdminHighlightsButton = (
  props: AddAdminHighlightsButtonProps
): JSX.Element => {
  const { editorInstance } = props

  React.useEffect(() => {
    addAdminHighlightsBlotToQuill()
  }, [])

  const handleAdminHighlights = () => {
    editorInstance.format(ADMIN_HIGHLIGHTS_BLOT_NAME, true)
  }

  return (
    <ButtonContainer>
      <button className='ql-admin-highlights' onClick={handleAdminHighlights}>
        <EditorHighlightIcon />
      </button>
    </ButtonContainer>
  )
}

export default AddAdminHighlightsButton

const ButtonContainer = styled.div`
  display: inline-block;

  * {
    color: ${({ theme }) => theme.palette.orange01} !important;
    transition: all 800ms ${({ theme }) => theme.transitions.easing.easeInOut}
      0ms;
  }

  button {
    cursor: pointer !important;
    background-color: ${({ theme }) => theme.palette.darkblue01} !important;
    color: ${({ theme }) => theme.palette.orange01} !important;
    width: 19px !important;
    height: 19px !important;
    line-height: 19px !important;
    border-radius: 2px !important;
    font-size: 12px !important;
    padding: 0 !important;
    text-align: center !important;
    box-shadow: ${({ theme }) => theme.shadows.darkShadow} !important;
    transition: all 800ms ${({ theme }) => theme.transitions.easing.easeInOut}
      0ms;
    margin: 0 3px !important;

    svg {
      float: unset !important;
      color: ${({ theme }) => theme.palette.orange01} !important;
    }
  }

  &:hover {
    * {
      color: ${({ theme }) => theme.palette.background} !important;
    }

    button {
      background-color: ${({ theme, isLoading }) =>
        isLoading
          ? theme.palette.inactive
          : theme.palette.darkblue04} !important;
      color: ${({ theme }) => theme.palette.background} !important;

      svg {
        float: unset !important;
        color: ${({ theme }) => theme.palette.background} !important;
      }
    }
  }
`
