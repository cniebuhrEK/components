// Wysiwyg/Wysiwyg.tsx - Wysiwyg component

import React from 'react'
import styled from 'styled-components'
import * as R from 'ramda'

import { GlossaryIcon } from '../../../icons'

import { addGlossaryBlotToQuill } from './../customBlots'
import SelectGlossary, {
  // eslint-disable-next-line no-unused-vars
  GlossaryPhrase,
  // eslint-disable-next-line no-unused-vars
  PaginationProps
} from './SelectGlossary'

interface AddGlossaryButtonProps {
  editorInstance: any
  handleFetchGlossaryList?: (e: any) => void
  glossaryEntries?: GlossaryPhrase[]
  glossaryEntriesPagination?: PaginationProps
}

const AddGlossaryButton = (props: AddGlossaryButtonProps): JSX.Element => {
  const {
    editorInstance,
    glossaryEntries,
    handleFetchGlossaryList,
    glossaryEntriesPagination
  } = props
  const [isOpen, setVisibility] = React.useState(false)
  const [isDisabled, setDisabled] = React.useState(true)

  const handleOpen = () => (isDisabled ? {} : setVisibility(true))
  const handleClose = () => setVisibility(false)

  React.useEffect(() => {
    addGlossaryBlotToQuill()
  }, [])

  const saveSelectionState = () => {
    if (editorInstance) {
      const selection = editorInstance.getSelection()
      const selectionLength = R.propOr(0, 'length', selection)
      const hasSelected = selectionLength > 0
      setDisabled(!hasSelected)
    }
  }

  React.useEffect(() => {
    window.addEventListener('mouseup', saveSelectionState)
    window.addEventListener('keyup', saveSelectionState)

    return () => {
      window.removeEventListener('mouseup', saveSelectionState)
      window.removeEventListener('keyup', saveSelectionState)
    }
  }, [editorInstance])

  return (
    <ButtonContainer isDisabled={isDisabled}>
      <button
        disabled={isDisabled}
        className='ql-glossary'
        onClick={handleOpen}
      >
        <GlossaryIcon />
      </button>
      <SelectGlossary
        pagination={glossaryEntriesPagination}
        open={isOpen}
        handleClose={handleClose}
        handleFetchGlossaryList={handleFetchGlossaryList}
        glossaryEntries={glossaryEntries}
        editorInstance={editorInstance}
      />
    </ButtonContainer>
  )
}

export default AddGlossaryButton

const ButtonContainer = styled.div`
  display: inline-block;

  .__react_component_tooltip {
    text-align: center !important;
    background-color: ${({ theme }) => theme.palette.biege} !important;
    opacity: 1 !important;
    color: ${({ theme }) => theme.palette.textDark} !important;
    padding: 10px;
    border: none !important;
    margin-top: 0px !important;
    box-shadow: ${({ theme }) => theme.shadows.darkShadow} !important;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: -0.1px;

    &::before,
    &::after {
      display: none;
    }
  }

  * {
    color: ${({ theme, isLoading, isDisabled }) =>
      isLoading || isDisabled
        ? theme.palette.biege
        : theme.palette.orange01} !important;
    transition: all 800ms ${({ theme }) => theme.transitions.easing.easeInOut}
      0ms;
  }

  button {
    cursor: ${({ isDisabled }) =>
      isDisabled ? 'not-allowed' : 'pointer'} !important;
    background-color: ${({ theme, isLoading, isDisabled }) =>
      isLoading || isDisabled
        ? theme.palette.inactive
        : theme.palette.darkblue01} !important;
    color: ${({ theme, isLoading, isDisabled }) =>
      isLoading || isDisabled
        ? theme.palette.biege
        : theme.palette.orange01} !important;
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
      color: ${({ theme, isLoading, isDisabled }) =>
        isLoading || isDisabled
          ? theme.palette.biege
          : theme.palette.orange01} !important;
    }

    svg g {
      color: ${({ theme, isLoading, isDisabled }) =>
        isLoading || isDisabled
          ? theme.palette.biege
          : theme.palette.orange01} !important;
    }
  }

  &:hover {
    * {
      color: ${({ theme, isLoading, isDisabled }) =>
        isLoading || isDisabled
          ? theme.palette.biege
          : theme.palette.darkblue01} !important;
    }

    button {
      background-color: ${({ theme, isLoading, isDisabled }) =>
        isLoading || isDisabled
          ? theme.palette.inactive
          : theme.palette.orange01} !important;
      color: ${({ theme }) => theme.palette.darkblue01} !important;

      svg {
        float: unset !important;
        color: ${({ theme, isLoading, isDisabled }) =>
          isLoading || isDisabled
            ? theme.palette.biege
            : theme.palette.background} !important;
      }

      svg g {
        color: ${({ theme, isLoading, isDisabled }) =>
          isLoading || isDisabled
            ? theme.palette.biege
            : theme.palette.background} !important;
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
