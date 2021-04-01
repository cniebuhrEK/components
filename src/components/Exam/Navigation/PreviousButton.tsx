import React from 'react'

import { ExamNavRight } from './styles'
import ExamIconPrevious from '../../../examIcons/Previous'

interface PreviousButtonProps {
  onClick: (e) => any
}

const PreviousButton = (props: PreviousButtonProps): JSX.Element => {
  return (
    <ExamNavRight onClick={props.onClick} id='previous-btn'>
      <ExamIconPrevious />
      <div>
        <span className='underline'>P</span>revious
      </div>
    </ExamNavRight>
  )
}

export default PreviousButton
