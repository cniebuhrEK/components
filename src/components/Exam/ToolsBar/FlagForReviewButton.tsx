import React, { useEffect } from 'react'
import styled from 'styled-components'
import cx from 'classnames'

import FlagUnmark from '../../../examIcons/FlagUnmark'
import FlagMark from '../../../examIcons/FlagMark'

interface StrikethroughButtonProps {
  onFlagClick: (e) => void
  isFlagged: boolean
}

const StrikethroughButton = (props: StrikethroughButtonProps): JSX.Element => {
  const { isFlagged, onFlagClick } = props
  const buttonClass = cx({
    '--flagged': isFlagged
  })
  const handleKeyboardShortcut = e => {
    if (e.altKey && e.keyCode === 70) {
      onFlagClick(e)
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyboardShortcut)

    return () => {
      document.removeEventListener('keydown', handleKeyboardShortcut)
    }
  }, [])

  return (
    <StrikethroughButtonContainer className={buttonClass} onClick={onFlagClick}>
      {isFlagged ? <FlagMark /> : <FlagUnmark />}
      <span className='underline'>F</span>lag for review
      <div className='hover-tooltip'>Flag for review</div>
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
  position: relative;

  .hover-tooltip {
    display: none;
    position: absolute;
    color: ${props => props.theme.palette.white};
    background-color: ${props => props.theme.palette.blue01};
    border: 1px solid ${props => props.theme.palette.black};
    top: calc(100% + 5px);
    left: 10px;
    padding: 3px 2px;
  }

  &.--flagged {
    color: ${props => props.theme.palette.yellow02};
  }

  svg {
    transform: translateY(2px);
    margin-right: 4px;
  }

  .underline {
    text-decoration: underline;
  }

  &:hover {
    color: ${props => props.theme.palette.yellow02};

    .hover-tooltip {
      display: block;
    }
  }

  &:focus,
  &:active {
    outline: 1px solid ${props => props.theme.palette.white};
  }
`
