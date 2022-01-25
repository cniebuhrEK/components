import React from 'react'
import styled from 'styled-components'

import { IconButton } from '../IconButton'
import { TrashIcon } from '../../icons'

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
  onChange,
  onRemove
}: HighlightColorPickerProps): JSX.Element => {
  const handleRemove = e => {
    e.preventDefault()
    onRemove && onRemove(e)
  }
  const handleSelect = value => e => {
    e.preventDefault()
    onChange && onChange(value)
  }

  return (
    <Container>
      <IconButton
        onClick={handleRemove}
        color='blue'
        variant='transparent'
        icon={<TrashIcon id='delete-highlight-icon' />}
        id='delete-highlight'
      />
      <div className='picker-colors'>
        <ColorPicker
          onClick={handleSelect('color-green')}
          className='picker-color color-green'
          data-highlight={HIGHLIGHT_COLORS.green}
        />
        <ColorPicker
          onClick={handleSelect('color-purple')}
          className='picker-color color-purple'
          data-highlight={HIGHLIGHT_COLORS.purple}
        />
        <ColorPicker
          onClick={handleSelect('color-red')}
          className='picker-color color-red'
          data-highlight={HIGHLIGHT_COLORS.red}
        />
        <ColorPicker
          onClick={handleSelect('color-yellow')}
          className='picker-color color-yellow'
          data-highlight={HIGHLIGHT_COLORS.yellow}
        />
        <ColorPicker
          onClick={handleSelect('color-blue')}
          className='picker-color color-blue'
          data-highlight={HIGHLIGHT_COLORS.blue}
        />
        <ColorPicker
          onClick={handleSelect('color-orange')}
          className='picker-color color-orange'
          data-highlight={HIGHLIGHT_COLORS.orange}
        />
      </div>
    </Container>
  )
}

export default HighlightColorPicker

const Container = styled.div`
  display: inline-flex;
  padding: 5px 10px;
  box-shadow: ${props => props.theme.shadows.darkShadow};
  background-color: ${props => props.theme.palette.white};
  gap: 12px;
  border-radius: 4px;
  z-index: ${({ theme }) => theme.zIndex.menu + 30};
  button {
    box-shadow: ${props => props.theme.shadows.darkShadow};
  }

  .picker-colors {
    max-width: 75px;
    display: flex;
    align-items: center;
    justify-content: center;
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
    background-color: ${({ theme }) => theme.palette.highlightGreen};
  }

  &.color-yellow {
    background-color: ${({ theme }) => theme.palette.highlightYellow};
  }

  &.color-purple {
    background-color: ${({ theme }) => theme.palette.purple08};
  }

  &.color-blue {
    background-color: ${({ theme }) => theme.palette.lightblue05};
  }

  &.color-red {
    background-color: ${({ theme }) => theme.palette.deepred07};
  }

  &.color-orange {
    background-color: ${({ theme }) => theme.palette.orange05};
  }

  &:hover,
  &:active {
    border-color: ${({ theme }) => theme.palette.brown01};
  }
`
