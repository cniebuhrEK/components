import React from 'react'
import styled from 'styled-components'
import CheckmarkIcon from '../../icons/Checkmark'
import cx from 'classnames'

interface CheckboxProps {
  name: string
  isSelected: boolean
  intersection?: boolean
  onChange: (e: any) => void
}

const Checkbox = (props: CheckboxProps): JSX.Element => {
  const checkboxClass = cx({
    'exam-checkbox': true,
    'exam-checkbox--selected': props.isSelected
  })

  const handleClick = (e: any) => {
    e.preventDefault()
    props.onChange(!props.isSelected)
  }

  return (
    <Container
      className={checkboxClass}
      id={`exam-checkbox-${props.name}`}
      data-is-selected={`${props.isSelected}`}
      data-is-intersected={`${props.intersection}`}
      onClick={handleClick}
    >
      <div className='exam-checkbox--checked'>
        <CheckmarkIcon />
      </div>
      <div className='exam-checkbox--unchecked'>
        {props.intersection && <MinusIcon />}
      </div>
    </Container>
  )
}

export const MinusIcon = styled.div`
  width: 8px;
  height: 2px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.palette.panelBackground};
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  border: 1px solid ${({ theme }) => theme.palette.border};
  color: ${({ theme }) => theme.palette.panelBackground} !important;
  background-color: transparent;
  border-radius: 2px;
  font-size: 12px !important;
  cursor: pointer;
  transition: all 500ms;
  overflow: hidden;

  &[data-is-selected='true'] {
    background-color: ${({ theme }) => theme.palette.orange01};
    border: 1px solid ${({ theme }) => theme.palette.orange01};
    color: ${({ theme }) => theme.palette.panelBackground} !important;

    .exam-checkbox--checked {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px !important;
      color: ${({ theme }) => theme.palette.panelBackground} !important;
    }

    .exam-checkbox--unchecked {
      display: none;
    }
  }

  &[data-is-intersected='true'] {
    background-color: ${({ theme }) => theme.palette.orange01};
    border: 1px solid ${({ theme }) => theme.palette.orange01};
    color: ${({ theme }) => theme.palette.panelBackground};
  }

  &[data-is-selected='false'] {
    .exam-checkbox--checked {
      display: none;
    }

    .exam-checkbox--unchecked {
      display: inline-block;
    }
  }
`

export default Checkbox
