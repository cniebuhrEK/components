import React from 'react'

import { ExamNavLeft } from './styles'

interface MarkExamButtonProps {
  onClick: (e) => any
}

const MarkExamButton = (props: MarkExamButtonProps): JSX.Element => {
  return (
    <ExamNavLeft onClick={props.onClick} id='mark-exam-btn'>
      Mark on&nbsp;<span className='underline'>E</span>xam
    </ExamNavLeft>
  )
}

export default MarkExamButton
