import React, { useState } from 'react'
import styled from 'styled-components'
import cx from 'classnames'
import { highlight } from '../../../utils/exam'

import DownIcon from '../../../examIcons/Down'

const highlightOptions = {
  add: 'add-highlight',
  remove: 'remove-highlight'
}

const HighlightButton = (): JSX.Element => {
  const [open, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(highlightOptions.add)

  const containerClass = cx({
    'button__is-open': open,
    'button__add-highlight': selectedOption === highlightOptions.add,
    'button__remove-highlight': selectedOption === highlightOptions.remove
  })

  const toggleDropdown = () => setIsOpen(prevState => !prevState)

  const triggerHighlightOption = () => {
    if (selectedOption === highlightOptions.add) {
      highlight('#ff0')
    }

    if (selectedOption === highlightOptions.remove) {
      highlight('transparent')
    }
  }

  const selectHighlightOption = option => e => {
    e.preventDefault()
    setSelectedOption(option)
    toggleDropdown()
  }

  return (
    <HighlightButtonContainer className={containerClass}>
      <div className='select-highlight-trigger' onClick={toggleDropdown}>
        <div className='selected-highlight-square' />
        <DownIcon />
      </div>
      <div onMouseDown={triggerHighlightOption}>
        <span className='underline'>H</span>ighlight
      </div>
      <div className='dropdown'>
        <div
          className='highlight-option'
          onClick={selectHighlightOption(highlightOptions.add)}
        >
          <div className='add-highlight-square' />
        </div>
        <div
          className='highlight-option'
          onClick={selectHighlightOption(highlightOptions.remove)}
        >
          <div className='remove-highlight-square' />
          Remove highlight
        </div>
      </div>
    </HighlightButtonContainer>
  )
}

HighlightButton.defaultProps = {}

export default HighlightButton

export const HighlightButtonContainer = styled.div`
  font-size: 16px;
  color: ${props => props.theme.palette.white};
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;

  .select-highlight-trigger {
    display: flex;
  }

  .selected-highlight-square {
    width: 16px;
    height: 16px;
    border: 2px solid ${props => props.theme.palette.white};
  }

  &.button__add-highlight .selected-highlight-square {
    background-color: ${props => props.theme.palette.yellow02};
  }

  &.button__remove-highlight .selected-highlight-square {
    background-color: transparent;
  }

  svg {
    transform: translateY(2px);
    margin-right: 3px;
  }

  .underline {
    text-decoration: underline;
  }

  &.button__is-open,
  &:hover {
    color: ${props => props.theme.palette.yellow02};
  }

  &.button__is-open,
  &:focus,
  &:active {
    outline: 1px solid ${props => props.theme.palette.white};
  }

  .dropdown {
    position: absolute;
    top: calc(100% + 5px);
    left: 0;
    display: none;
    padding: 3px;
    width: 202px;
    background-color: ${props => props.theme.palette.blue02};
    border: 1px solid ${props => props.theme.palette.black};
  }

  &.button__is-open .dropdown {
    display: block;
  }

  .highlight-option {
    padding: 0 6px;
    margin-top: 5px;
    display: flex;
    cursor: pointer;
    color: ${props => props.theme.palette.white};

    &:hover {
      color: ${props => props.theme.palette.yellow02};
    }
  }

  .add-highlight-square {
    width: 16px;
    height: 16px;
    border: 2px solid ${props => props.theme.palette.yellow02};
    background-color: ${props => props.theme.palette.yellow02};
  }

  .remove-highlight-square {
    width: 16px;
    height: 16px;
    margin-right: 5px;
    border: 2px solid ${props => props.theme.palette.white};
    background-color: transparent;
  }
`
