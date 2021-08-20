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
  width: 10px;
  height: 3px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.palette.orange01};
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 20px;
  width: 24px;
  height: 24px;
  border: 1px solid #000000;
  border-radius: 2px;
  font-size: 14px;
  cursor: pointer;
  transition: all 500ms;

  &[data-is-selected='true'] {
    background: ${({ theme }) => theme.palette.darkblue01};
    .exam-checkbox--checked {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: ${({ theme }) => theme.palette.orange01};
      height: 14px;
      width: 14px;
    }

    .exam-checkbox--unchecked {
      display: none;
    }
  }

  &[data-is-intersected='true'] {
    background: ${({ theme }) => theme.palette.darkblue01};
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
