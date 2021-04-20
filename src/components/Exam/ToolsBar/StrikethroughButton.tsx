import React, { useEffect } from 'react'
import styled from 'styled-components'

import Striketrough from '../../../examIcons/Striketrough'
import { strikethrough } from '../../../utils/exam'

const StrikethroughButton = (): JSX.Element => {
  const handleKeyboardShortcut = e => {
    if (e.altKey && e.keyCode === 83) {
      strikethrough()
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyboardShortcut)

    return () => {
      document.removeEventListener('keydown', handleKeyboardShortcut)
    }
  }, [])

  return (
    <StrikethroughButtonContainer onMouseDown={strikethrough}>
      <Striketrough />
      <span className='underline'>S</span>triketrough
    </StrikethroughButtonContainer>
  )
}

StrikethroughButton.defaultProps = {}

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
