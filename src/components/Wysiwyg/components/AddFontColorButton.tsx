// Wysiwyg/Wysiwyg.tsx - Wysiwyg component

import React from 'react'
import styled from 'styled-components'
import { PaletteIcon, TrashIcon } from '../../../icons'
import * as R from 'ramda'

import {
  addFontColorBlots,
  FONT_COLOR_BLUE,
  FONT_COLOR_ORANGE,
  FONT_COLOR_GREEN,
  FONT_COLOR_PURPLE,
  FONT_COLOR_BLACK,
  FONT_COLOR_BROWN,
  FONT_COLOR_RED
} from './../customBlots'
import { IconButton } from '../../IconButton'

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
    addFontColorBlots()
  }, [])

  const handleFontColor = blotName => e => {
    e.preventDefault()
    editorInstance.format(blotName, true)
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

  const handleRemoveFontColor = e => {
    e.preventDefault()
    const selection = editorInstance.getSelection(true)
    const index = R.propOr(1, 'index', selection)
    const length = R.propOr(1, 'length', selection)
    editorInstance.removeFormat(index, length)
    handleClose()
  }

  return (
    <ButtonContainer isOpen={isOpen}>
      <div className='trigger-button'>
        <button className='ql-font-color' onClick={handleOpen}>
          <PaletteIcon />
        </button>
      </div>
      <div className='mode-selection' ref={dropdownRef}>
        <IconButton
          onClick={handleRemoveFontColor}
          color='blue'
          variant='transparent'
          icon={<TrashIcon id='delete-highlight-icon' />}
          id='delete-highlight'
        />
        <div className='picker-colors'>
          <ColorPicker
            onClick={handleFontColor(FONT_COLOR_ORANGE)}
            className='picker-color color-orange'
          />
          <ColorPicker
            onClick={handleFontColor(FONT_COLOR_PURPLE)}
            className='picker-color color-purple'
          />
          <ColorPicker
            onClick={handleFontColor(FONT_COLOR_RED)}
            className='picker-color color-red'
          />
          <ColorPicker
            onClick={handleFontColor(FONT_COLOR_BLUE)}
            className='picker-color color-blue'
          />
          <ColorPicker
            onClick={handleFontColor(FONT_COLOR_GREEN)}
            className='picker-color color-green'
          />
          <ColorPicker
            onClick={handleFontColor(FONT_COLOR_BROWN)}
            className='picker-color color-brown'
          />
          <ColorPicker
            onClick={handleFontColor(FONT_COLOR_BLACK)}
            className='picker-color color-black'
          />
        </div>
      </div>
    </ButtonContainer>
  )
}

export default AddAdminHighlightsButton

const ButtonContainer = styled.div`
  display: inline-block;
  position: relative;

  .trigger-button {
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
      border-radius: 2px !important;
      font-size: 14px !important;
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
          isLoading
            ? theme.palette.inactive
            : theme.palette.orange01} !important;
        color: ${({ theme }) => theme.palette.darkblue01} !important;

        svg {
          float: unset !important;
          color: ${({ theme }) => theme.palette.background} !important;
        }
      }
    }
  }

  .mode-selection {
    display: inline-flex;
    padding: 5px 10px;
    box-shadow: ${props => props.theme.shadows.darkShadow};
    gap: 12px;
    border-radius: 4px;
    opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
    height: ${({ isOpen }) => (isOpen ? 'auto' : 0)};
    overflow: hidden;
    position: absolute;
    background-color: ${({ theme }) => theme.palette.biege};
    box-shadow: ${props => props.theme.shadows.darkShadow};
    width: 100%;
    top: calc(100% + 5px);
    left: 0;
    transition: all 300ms ${({ theme }) => theme.transitions.easing.easeInOut};
    min-width: 130px;
    z-index: ${({ theme }) => theme.zIndex.menu};
    max-width: 150px;

    button {
      box-shadow: ${props => props.theme.shadows.darkShadow};
    }

    svg {
      width: 12px !important;
    }
  }

  .picker-colors {
    max-width: 75px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 5px 20px;
  }
`

const ColorPicker = styled.div`
  width: 11.65px;
  height: 11.65px;
  border-radius: 50%;
  box-shadow: ${props => props.theme.shadows.darkShadow};
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 300ms ${({ theme }) => theme.transitions.easing.easeInOut};

  &.color-green {
    background-color: ${({ theme }) => theme.palette.green02};
  }

  &.color-purple {
    background-color: ${({ theme }) => theme.palette.purple01};
  }

  &.color-blue {
    background-color: ${({ theme }) => theme.palette.lightblue01};
  }

  &.color-orange {
    background-color: ${({ theme }) => theme.palette.orange01};
  }

  &.color-black {
    background-color: ${({ theme }) => theme.palette.black};
  }

  &.color-brown {
    background-color: ${({ theme }) => theme.palette.brown01};
  }

  &.color-red {
    background-color: ${({ theme }) => theme.palette.deepred01};
  }

  &.color-remove {
    background-color: transparent;
  }

  &:hover,
  &:active {
    border-color: ${({ theme }) => theme.palette.brown01};
  }
`
