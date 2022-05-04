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
  handleCreateNew?: (e: any) => Promise<void>
  glossaryEntries?: GlossaryPhrase[]
  glossaryEntriesPagination?: PaginationProps
}

const AddGlossaryButton = (props: AddGlossaryButtonProps): JSX.Element => {
  const {
    editorInstance,
    glossaryEntries,
    handleFetchGlossaryList,
    glossaryEntriesPagination,
    handleCreateNew
  } = props
  const [isOpen, setVisibility] = React.useState(false)
  const [isDisabled, setDisabled] = React.useState(true)
  const [selectedText, setSelectedText] = React.useState('')
  const [initialDelta, setInitialDelta] = React.useState(null)

  const handleOpen = e => {
    e.preventDefault()
    const selection = editorInstance.getSelection(true)
    const selectionLength = R.propOr(0, 'length', selection)
    const selectionIndex = R.propOr(0, 'index', selection)
    const selectedText = editorInstance.getText(selectionIndex, selectionLength)
    const initialContent = editorInstance.getContents()

    setInitialDelta(initialContent)
    setSelectedText(selectedText)
    setVisibility(true)
  }
  const handleClose = () => setVisibility(false)

  React.useEffect(() => {
    addGlossaryBlotToQuill()
  }, [])

  const saveSelectionState = () => {
    if (editorInstance) {
      const selection = editorInstance.getSelection(true)
      const selectionLength = R.propOr(0, 'length', selection)
      const hasSelected = selectionLength > 0

      setDisabled(!hasSelected)
    }
  }

  const handleListener = e => {
    const targetTagName = R.pathOr('', ['target', 'localName'], e)
    if (targetTagName !== 'input' && targetTagName !== 'textarea') {
      saveSelectionState()
    }
  }

  React.useEffect(() => {
    saveSelectionState()
    window.addEventListener('mouseup', handleListener)
    window.addEventListener('keyup', handleListener)

    return () => {
      window.removeEventListener('mouseup', handleListener)
      window.removeEventListener('keyup', handleListener)
    }
  }, [editorInstance])

  return (
    <ButtonContainer isDisabled={isDisabled}>
      <button disabled={isDisabled} type='button' onClick={handleOpen}>
        <GlossaryIcon />
      </button>
      <SelectGlossary
        initialDelta={initialDelta}
        selectedText={selectedText}
        pagination={glossaryEntriesPagination}
        open={isOpen}
        handleClose={handleClose}
        handleFetchGlossaryList={handleFetchGlossaryList}
        glossaryEntries={glossaryEntries}
        editorInstance={editorInstance}
        handleCreateNew={handleCreateNew}
      />
    </ButtonContainer>
  )
}

export default AddGlossaryButton

const ButtonContainer = styled.div`
  display: inline-block;

  .__react_component_tooltip {
    text-align: center !important;
    background: ${({ theme }) => theme.palette.biege} !important;
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
        ? theme.colors.buttons.contained.disabled.font
        : theme.colors.buttons.contained.secondary.font} !important;
    transition: all 800ms ${({ theme }) => theme.transitions.easing.easeInOut}
      0ms;
  }

  button {
    cursor: ${({ isDisabled }) =>
      isDisabled ? 'not-allowed' : 'pointer'} !important;
    background: ${({ theme, isLoading, isDisabled }) =>
      isLoading || isDisabled
        ? theme.colors.buttons.contained.disabled.background
        : theme.colors.buttons.contained.secondary.background} !important;
    color: ${({ theme, isLoading, isDisabled }) =>
      isLoading || isDisabled
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
      color: ${({ theme, isLoading, isDisabled }) =>
        isLoading || isDisabled
          ? theme.colors.buttons.contained.disabled.font
          : theme.colors.buttons.contained.secondary.font} !important;
    }

    svg g {
      color: ${({ theme, isLoading, isDisabled }) =>
        isLoading || isDisabled
          ? theme.colors.buttons.contained.disabled.font
          : theme.colors.buttons.contained.secondary.font} !important;
    }
  }

  &:hover {
    * {
      color: ${({ theme, isLoading, isDisabled }) =>
        isLoading || isDisabled
          ? theme.colors.buttons.contained.disabled.fontActive
          : theme.colors.buttons.contained.secondary.fontActive} !important;
    }

    button {
      background: ${({ theme, isLoading, isDisabled }) =>
        isLoading || isDisabled
          ? theme.colors.buttons.contained.disabled.backgroundActive
          : theme.colors.buttons.contained.secondary
              .backgroundActive} !important;
      color: ${({ theme, isLoading, isDisabled }) =>
        isLoading || isDisabled
          ? theme.colors.buttons.contained.disabled.fontActive
          : theme.colors.buttons.contained.secondary.fontActive} !important;

      svg {
        float: unset !important;
        color: ${({ theme, isLoading, isDisabled }) =>
          isLoading || isDisabled
            ? theme.colors.buttons.contained.disabled.fontActive
            : theme.colors.buttons.contained.secondary.fontActive} !important;
      }

      svg g {
        color: ${({ theme, isLoading, isDisabled }) =>
          isLoading || isDisabled
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
