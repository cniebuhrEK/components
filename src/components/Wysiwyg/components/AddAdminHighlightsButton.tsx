// Wysiwyg/Wysiwyg.tsx - Wysiwyg component

import React from 'react'
import styled from 'styled-components'
import { EditorHighlightIcon } from '../../../icons'

import {
  addAdminHighlightsBlotToQuill,
  ADMIN_HIGHLIGHTS_BLOT_NAME
} from './../customBlots'

interface AddAdminHighlightsButtonProps {
  editorInstance: any
}

const AddAdminHighlightsButton = (
  props: AddAdminHighlightsButtonProps
): JSX.Element => {
  const { editorInstance } = props
  const dropdownRef = React.useRef(null)
  const [isOpen, setIsOpen] = React.useState(false)

  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)

  React.useEffect(() => {
    addAdminHighlightsBlotToQuill()
  }, [])

  const handleAdminHighlights = e => {
    e.preventDefault()
    editorInstance.format(ADMIN_HIGHLIGHTS_BLOT_NAME, true)
    handleClose()
  }

  React.useEffect(() => {
    function handleClickOutside(event) {
      // @ts-ignore
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        handleClose()
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [dropdownRef])

  const handleRemoveAdminHighlights = e => {
    e.preventDefault()
    editorInstance.format(ADMIN_HIGHLIGHTS_BLOT_NAME, false)
    handleClose()
  }

  return (
    <ButtonContainer isOpen={isOpen}>
      <button className='ql-admin-highlights' onClick={handleOpen}>
        <EditorHighlightIcon />
      </button>
      <div className='mode-selection' ref={dropdownRef}>
        <div className='mode-option' onClick={handleAdminHighlights}>
          Add
        </div>
        <div className='mode-option' onClick={handleRemoveAdminHighlights}>
          Remove
        </div>
      </div>
    </ButtonContainer>
  )
}

export default AddAdminHighlightsButton

const ButtonContainer = styled.div`
  display: inline-block;
  position: relative;

  button * {
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
    button * {
      color: ${({ theme }) => theme.palette.darkblue01} !important;
    }

    button {
      background-color: ${({ theme, isLoading }) =>
        isLoading ? theme.palette.inactive : theme.palette.orange01} !important;
      color: ${({ theme }) => theme.palette.darkblue01} !important;

      svg {
        float: unset !important;
        color: ${({ theme }) => theme.palette.background} !important;
      }
    }
  }

  .mode-selection {
    opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
    height: ${({ isOpen }) => (isOpen ? 'auto' : 0)};
    overflow: hidden;
    position: absolute;
    background-color: ${({ theme }) => theme.palette.biege};
    box-shadow: ${props => props.theme.shadows.darkShadow};
    width: 100%;
    top: calc(100% + 19px);
    left: 0;
    transition: all 300ms ${({ theme }) => theme.transitions.easing.easeInOut};
    min-width: 97px;
    z-index: ${({ theme }) => theme.zIndex.menu};

    .mode-option {
      cursor: pointer;
      min-height: 19px;
      padding: 2px 12px;
    }

    .mode-option:hover {
      box-shadow: ${props => props.theme.shadows.darkShadow};
      font-weight: bold;
    }
  }
`
