import React from 'react'

import { ExamNavLeft } from './styles'
import ExamIconPeriodic from '../../../examIcons/Periodic'

interface EndExamButtonProps {
  onClick: (e) => any
}

const EndExamButton = (props: EndExamButtonProps): JSX.Element => {
  return (
    <ExamNavLeft onClick={props.onClick}>
      <ExamIconPeriodic />
      <div>
        Periodic <span className='underline'>T</span>able
      </div>
    </ExamNavLeft>
  )
}

export default EndExamButton
