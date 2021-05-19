import React, { useEffect } from 'react'
import styled from 'styled-components'

import Strikethrough from '../../../examIcons/Strikethrough'
import { strikethrough } from '../../../utils/exam'
import { CHECK_SHORTCUT } from '../../../utils/shortcuts'

interface StrikethroughButtonProps {
  callback: () => void
}

const StrikethroughButton = ({
  callback
}: StrikethroughButtonProps): JSX.Element => {
  const handleStrikeThrough = () => {
    strikethrough()
    callback()
  }

  const handleKeyboardShortcut = e => {
    if (CHECK_SHORTCUT(e).altS) {
      handleStrikeThrough()
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyboardShortcut)

    return () => {
      document.removeEventListener('keydown', handleKeyboardShortcut)
    }
  }, [])

  return (
    <StrikethroughButtonContainer onMouseDown={handleStrikeThrough}>
      <Strikethrough />
      <span className='underline'>S</span>trikethrough
    </StrikethroughButtonContainer>
  )
}

StrikethroughButton.defaultProps = {
  callback: () => {}
}

export default StrikethroughButton

export const StrikethroughButtonContainer = styled.div`
  font-size: 16px;
  color: ${props => props.theme.palette.white};
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-left: 10px;

  svg {
    transform: translateY(2px);
    margin-right: 3px;
  }

  .underline {
    text-decoration: underline;
  }

  &:hover {
    color: ${props => props.theme.palette.yellow02};
  }

  &:focus,
  &:active {
    outline: 1px solid ${props => props.theme.palette.white};
  }

  &.--condensed {
    .content {
      display: none;
    }
  }
`
