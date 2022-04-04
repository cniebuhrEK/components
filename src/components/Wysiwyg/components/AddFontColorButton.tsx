// Wysiwyg/Wysiwyg.tsx - Wysiwyg component

import React from 'react'
import styled from 'styled-components'
import { PaletteIcon, TrashIcon } from '../../../icons'

import {
  addFontColorBlots,
  // plop_import_font_color_blot_definition
  FONT_COLOR_BLUE,
  FONT_COLOR_ORANGE,
  FONT_COLOR_GREEN,
  FONT_COLOR_PURPLE,
  FONT_COLOR_BLACK,
  FONT_COLOR_BROWN,
  FONT_COLOR_RED,
  FONT_COLOR_YELLOW,
  FONT_COLOR_GREY,
  FONT_COLOR_VIOLET,
  FONT_COLOR_LIGHTRED,
  FONT_COLOR_AZURE,
  FONT_COLOR_LIGHTGREEN,
  FONT_COLOR_LIGHTBROWN
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

  const removeAllColorFormats = () => {
    const allBlots = [
      // plop_create_font_color_blot_list
      FONT_COLOR_BLUE,
      FONT_COLOR_ORANGE,
      FONT_COLOR_GREEN,
      FONT_COLOR_PURPLE,
      FONT_COLOR_BLACK,
      FONT_COLOR_BROWN,
      FONT_COLOR_RED,
      FONT_COLOR_YELLOW,
      FONT_COLOR_GREY,
      FONT_COLOR_VIOLET,
      FONT_COLOR_LIGHTRED,
      FONT_COLOR_AZURE,
      FONT_COLOR_LIGHTGREEN,
      FONT_COLOR_LIGHTBROWN
    ]

    allBlots.forEach(blotName => editorInstance.format(blotName, false))
  }

  const handleFontColor = blotName => e => {
    e.preventDefault()
    removeAllColorFormats()
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
    removeAllColorFormats()
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
            onClick={handleFontColor(FONT_COLOR_YELLOW)}
            className='picker-color color-yellow'
          />
          <ColorPicker
            onClick={handleFontColor(FONT_COLOR_BLACK)}
            className='picker-color color-black'
          />
          <ColorPicker
            onClick={handleFontColor(FONT_COLOR_GREY)}
            className='picker-color color-grey'
          />
          <ColorPicker
            onClick={handleFontColor(FONT_COLOR_PURPLE)}
            className='picker-color color-purple'
          />
          <ColorPicker
            onClick={handleFontColor(FONT_COLOR_VIOLET)}
            className='picker-color color-violet'
          />
          <ColorPicker
            onClick={handleFontColor(FONT_COLOR_RED)}
            className='picker-color color-red'
          />
          <ColorPicker
            onClick={handleFontColor(FONT_COLOR_LIGHTRED)}
            className='picker-color color-lightRed'
          />
          <ColorPicker
            onClick={handleFontColor(FONT_COLOR_BLUE)}
            className='picker-color color-blue'
          />
          <ColorPicker
            onClick={handleFontColor(FONT_COLOR_AZURE)}
            className='picker-color color-azure'
          />
          <ColorPicker
            onClick={handleFontColor(FONT_COLOR_GREEN)}
            className='picker-color color-green'
          />
          <ColorPicker
            onClick={handleFontColor(FONT_COLOR_LIGHTGREEN)}
            className='picker-color color-lightGreen'
          />
          <ColorPicker
            onClick={handleFontColor(FONT_COLOR_BROWN)}
            className='picker-color color-brown'
          />
          <ColorPicker
            onClick={handleFontColor(FONT_COLOR_LIGHTBROWN)}
            className='picker-color color-lightBrown'
          />
          {/* plop_create_font_color_blot_component */}

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
      color: ${({ theme, isLoading }) =>
        isLoading
          ? theme.colors.buttons.contained.disabled.font
          : theme.colors.buttons.contained.secondary.font} !important;
      transition: all 800ms ${({ theme }) => theme.transitions.easing.easeInOut}
        0ms;
    }

    button {
      cursor: pointer !important;
      background-color: ${({ theme, isLoading }) =>
        isLoading
          ? theme.colors.buttons.contained.disabled.background
          : theme.colors.buttons.contained.secondary.background} !important;
      color: ${({ theme, isLoading }) =>
        isLoading
          ? theme.colors.buttons.contained.disabled.font
          : theme.colors.buttons.contained.secondary.font} !important;
      width: 19px !important;
      height: 19px !important;
      border-radius: 2px !important;
      font-size: 14px !important;
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
      button * {
        color: ${({ theme, isLoading }) =>
          isLoading
            ? theme.colors.buttons.contained.disabled.fontActive
            : theme.colors.buttons.contained.secondary.fontActive} !important;
      }

      button {
        background-color: ${({ theme, isLoading }) =>
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
  }

  .mode-selection {
    display: inline-flex;
    padding: 5px 10px;
    gap: 12px;
    border-radius: 4px;
    opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
    height: ${({ isOpen }) => (isOpen ? 'auto' : 0)};
    overflow: hidden;
    position: absolute;
    background-color: ${({ theme }) => theme.colors.backgrounds.main};
    box-shadow: ${props => props.theme.shadows.mainShadow};
    width: 100%;
    top: calc(100% + 5px);
    left: 0;
    transition: all 300ms ${({ theme }) => theme.transitions.easing.easeInOut};
    min-width: 100px;
    z-index: ${({ theme }) => theme.zIndex.menu};
    max-width: 100px;

    button {
      color: ${({ theme }) =>
        theme.colors.buttons.contained.primary.font} !important;
      background: ${({ theme }) =>
        theme.colors.buttons.contained.primary.background};
      border-color: ${({ theme }) =>
        theme.colors.buttons.contained.primary.border};
      box-shadow: none;
      border-width: 1px;
      border-style: solid;
      border-radius: 4px;

      * {
        color: ${({ theme }) =>
          theme.colors.buttons.contained.primary.font} !important;
      }

      svg {
        fill: ${({ theme }) =>
          theme.colors.buttons.contained.primary.font} !important;
      }

      &:hover {
        color: ${({ theme }) =>
          theme.colors.buttons.contained.primary.fontActive} !important;
        background: ${({ theme }) =>
          theme.colors.buttons.contained.primary.backgroundActive};
        border-color: ${({ theme }) =>
          theme.colors.buttons.contained.primary.borderActive};

        svg {
          fill: ${({ theme }) =>
            theme.colors.buttons.contained.primary.fontActive} !important;
        }

        * {
          color: ${({ theme }) =>
            theme.colors.buttons.contained.primary.fontActive} !important;
        }
      }
    }

    svg {
      width: 12px !important;
    }
  }

  .picker-colors {
    max-width: 55px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 5px 20px;
  }

  .picker-color {
  }
`

const ColorPicker = styled.div`
  width: 11.65px;
  height: 11.65px;
  border-radius: 50%;
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 300ms ${({ theme }) => theme.transitions.easing.easeInOut};

  &.color-green {
    background-color: ${({ theme }) =>
      theme.colors.editorFontColors.green.font};
  }

  &.color-purple {
    background-color: ${({ theme }) =>
      theme.colors.editorFontColors.purple.font};
  }

  &.color-blue {
    background-color: ${({ theme }) => theme.colors.editorFontColors.blue.font};
  }

  &.color-orange {
    background-color: ${({ theme }) =>
      theme.colors.editorFontColors.orange.font};
  }

  &.color-black {
    background-color: ${({ theme }) =>
      theme.colors.editorFontColors.black.font};
  }

  &.color-brown {
    background-color: ${({ theme }) =>
      theme.colors.editorFontColors.brown.font};
  }

  &.color-red {
    background-color: ${({ theme }) => theme.colors.editorFontColors.red.font};
  }

  &.color-grey {
    background-color: ${({ theme }) => theme.colors.editorFontColors.grey.font};
  }

  &.color-yellow {
    background-color: ${({ theme }) =>
      theme.colors.editorFontColors.yellow.font};
  }

  &.color-violet {
    background-color: ${({ theme }) =>
      theme.colors.editorFontColors.violet.font};
  }

  &.color-lightRed {
    background-color: ${({ theme }) =>
      theme.colors.editorFontColors.lightRed.font};
  }

  &.color-azure {
    background-color: ${({ theme }) =>
      theme.colors.editorFontColors.azure.font};
  }

  &.color-lightGreen {
    background-color: ${({ theme }) =>
      theme.colors.editorFontColors.lightGreen.font};
  }

  &.color-lightBrown {
    background-color: ${({ theme }) =>
      theme.colors.editorFontColors.lightBrown.font};
  }

  // plop_create_font_color_blot_component_color_class

  &.color-remove {
    background-color: transparent;
  }

  &:hover,
  &:active {
    border-color: ${({ theme }) => theme.colors.main.text};
  }
`
