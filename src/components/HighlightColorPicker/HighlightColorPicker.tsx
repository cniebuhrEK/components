import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import HighlightCursor from '../HighlightCursor/HighlightCursor'
import { isNotNilOrEmpty } from '../../utils/ramda'
import { HighlighterIcon } from '../../icons'

export const HIGHLIGHT_COLORS = {
  green: 'color-green',
  yellow: 'color-yellow',
  red: 'color-red',
  purple: 'color-purple',
  blue: 'color-blue',
  orange: 'color-orange'
}

interface HighlightColorPickerProps {
  onChange?: (e) => void
  onRemove?: (e) => void
  value?:
    | 'color-green'
    | 'color-purple'
    | 'color-red'
    | 'color-yellow'
    | 'color-blue'
    | 'color-orange'
}

export const HighlightColorPicker = ({
  onChange
}: HighlightColorPickerProps): JSX.Element => {
  const [selectedColor, setSelectedColor] = useState(HIGHLIGHT_COLORS.green)
  const handleSelect = value => e => {
    e.preventDefault()
    setSelectedColor(value)
  }

  useEffect(() => {
    onChange && onChange(selectedColor)
  }, [selectedColor])

  const hasColorSelected = isNotNilOrEmpty(selectedColor)

  return (
    <ContainerOuter>
      {hasColorSelected && <HighlightCursor />}
      <Container>
        <div className='picker-colors'>
          <HighlighterIcon />
          <span>Color: </span>
          <ColorPicker
            onClick={handleSelect('color-green')}
            className='picker-color color-green'
            data-highlight={HIGHLIGHT_COLORS.green}
            isActive={selectedColor === HIGHLIGHT_COLORS.green}
          />
          <ColorPicker
            onClick={handleSelect('color-purple')}
            className='picker-color color-purple'
            data-highlight={HIGHLIGHT_COLORS.purple}
            isActive={selectedColor === HIGHLIGHT_COLORS.purple}
          />
          <ColorPicker
            onClick={handleSelect('color-red')}
            className='picker-color color-red'
            data-highlight={HIGHLIGHT_COLORS.red}
            isActive={selectedColor === HIGHLIGHT_COLORS.red}
          />
          <ColorPicker
            onClick={handleSelect('color-yellow')}
            className='picker-color color-yellow'
            data-highlight={HIGHLIGHT_COLORS.yellow}
            isActive={selectedColor === HIGHLIGHT_COLORS.yellow}
          />
          <ColorPicker
            onClick={handleSelect('color-blue')}
            className='picker-color color-blue'
            data-highlight={HIGHLIGHT_COLORS.blue}
            isActive={selectedColor === HIGHLIGHT_COLORS.blue}
          />
          <ColorPicker
            onClick={handleSelect('color-orange')}
            className='picker-color color-orange'
            data-highlight={HIGHLIGHT_COLORS.orange}
            isActive={selectedColor === HIGHLIGHT_COLORS.orange}
          />
          <RemoveColor
            onClick={handleSelect('color-remove')}
            data-highlight='color-remove'
            isActive={selectedColor === 'color-remove'}
          />
        </div>
      </Container>
    </ContainerOuter>
  )
}

export default HighlightColorPicker

const ContainerOuter = styled.div`
  &:hover {
    .highlight-cursor svg {
      color: ${({ theme }) => theme.colors.main.white};
    }
  }
`

const Container = styled.div`
  padding: 8px;
  box-shadow: ${props => props.theme.shadows.mainShadow};
  background: ${props => props.theme.colors.tooltip.background};
  color: ${props => props.theme.colors.tooltip.font};
  border-radius: 4px;
  z-index: ${({ theme }) => theme.zIndex.menu + 30};

  .picker-colors {
    max-width: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
  }
`

const RemoveColor = styled.div`
  width: 11.65px;
  height: 11.65px;
  border-radius: 50%;
  box-shadow: ${props => props.theme.shadows.mainShadow};
  border: 2px solid
    ${({ isActive, theme }) =>
      isActive ? theme.colors.main.error500 : theme.colors.main.white};
  cursor: pointer;
  transition: all 300ms ${({ theme }) => theme.transitions.easing.easeInOut};

  &:hover,
  &:active {
    border-color: ${({ theme }) => theme.colors.main.error500};
  }
`

const ColorPicker = styled.div`
  width: 11.65px;
  height: 11.65px;
  border-radius: 50%;
  box-shadow: ${props => props.theme.shadows.mainShadow};
  border: 2px solid
    ${({ isActive, theme }) =>
      isActive ? theme.colors.main.error500 : 'transparent'};
  cursor: pointer;
  transition: all 300ms ${({ theme }) => theme.transitions.easing.easeInOut};

  &.color-green {
    background-color: ${({ theme }) =>
      theme.colors.highlights.green.background};
  }

  &.color-yellow {
    background-color: ${({ theme }) =>
      theme.colors.highlights.yellow.background};
  }

  &.color-purple {
    background-color: ${({ theme }) =>
      theme.colors.highlights.purple.background};
  }

  &.color-blue {
    background-color: ${({ theme }) => theme.colors.highlights.blue.background};
  }

  &.color-red {
    background-color: ${({ theme }) => theme.colors.highlights.red.background};
  }

  &.color-orange {
    background-color: ${({ theme }) =>
      theme.colors.highlights.orange.background};
  }

  &:hover,
  &:active {
    border-color: ${({ theme }) => theme.colors.main.error500};
  }
`
