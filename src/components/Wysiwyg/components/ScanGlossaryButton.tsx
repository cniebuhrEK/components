// Wysiwyg/Wysiwyg.tsx - Wysiwyg component

import React from 'react'
import styled from 'styled-components'

import { ScannerIcon } from '../../../icons'

import { addGlossaryBlotToQuill } from './../customBlots'
import ScanGlossary from './ScanGlossary'

interface ScanGlossaryButtonProps {
  editorInstance: any
  handleScanGlossaryList?: (e: any) => void
}

const ScanGlossaryButton = (props: ScanGlossaryButtonProps): JSX.Element => {
  const { editorInstance, handleScanGlossaryList } = props
  const [isOpen, setVisibility] = React.useState(false)

  const handleOpen = e => {
    e.preventDefault()
    setVisibility(true)
  }
  const handleClose = () => setVisibility(false)

  React.useEffect(() => {
    addGlossaryBlotToQuill()
  }, [])

  return (
    <ButtonContainer>
      <button onClick={handleOpen}>
        <ScannerIcon />
      </button>
      <ScanGlossary
        open={isOpen}
        handleClose={handleClose}
        handleScanGlossaryList={handleScanGlossaryList}
        editorInstance={editorInstance}
      />
    </ButtonContainer>
  )
}

export default ScanGlossaryButton

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
    color: ${({ theme, isLoading }) =>
      isLoading ? theme.palette.biege : theme.palette.orange01} !important;
    transition: all 800ms ${({ theme }) => theme.transitions.easing.easeInOut}
      0ms;
  }

  button {
    cursor: pointer !important;
    background-color: ${({ theme, isLoading }) =>
      isLoading ? theme.palette.inactive : theme.palette.darkblue01} !important;
    color: ${({ theme, isLoading }) =>
      isLoading ? theme.palette.biege : theme.palette.orange01} !important;
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
      color: ${({ theme, isLoading }) =>
        isLoading ? theme.palette.biege : theme.palette.orange01} !important;
    }
  }

  &:hover {
    * {
      color: ${({ theme, isLoading }) =>
        isLoading ? theme.palette.biege : theme.palette.darkblue01} !important;
    }

    button {
      background-color: ${({ theme, isLoading }) =>
        isLoading ? theme.palette.inactive : theme.palette.orange01} !important;
      color: ${({ theme }) => theme.palette.darkblue01} !important;

      svg {
        float: unset !important;
        color: ${({ theme, isLoading }) =>
          isLoading
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
