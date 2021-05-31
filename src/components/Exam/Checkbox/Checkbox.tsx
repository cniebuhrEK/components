import React from 'react'
import styled from 'styled-components'
import IconCorrect from '../../../examIcons/Correct'
import cx from 'classnames'

interface CheckboxProps {
  name: string
  isSelected: boolean
  onChange: (e) => void
}

const Checkbox = (props: CheckboxProps): JSX.Element => {
  const checkboxClass = cx({
    'exam-checkbox': true,
    'exam-checkbox--selected': props.isSelected
  })

  const handleClick = e => {
    e.preventDefault()
    props.onChange(!props.isSelected)
  }

  return (
    <CheckboxContainer>
      <div
        className={checkboxClass}
        id={`exam-checkbox-${props.name}`}
        data-is-selected={`${props.isSelected}`}
        onClick={handleClick}
      >
        <div className='exam-checkbox--checked'>
          <IconCorrect />
        </div>
        <div className='exam-checkbox--unchecked'> </div>
      </div>
    </CheckboxContainer>
  )
}

export default Checkbox

export const CheckboxContainer = styled.div`
  .exam-checkbox {
    width: 16px;
    height: 16px;
    border: 1px solid #000000;
    font-size: 14px;
    line-height: 16px;
    cursor: pointer;

    &[data-is-selected='true'] {
      .exam-checkbox--checked {
        display: inline-block;
      }

      .exam-checkbox--unchecked {
        display: none;
      }
    }

    &[data-is-selected='false'] {
      .exam-checkbox--checked {
        display: none;
      }

      .exam-checkbox--unchecked {
        display: inline-block;
      }
    }
  }
`
