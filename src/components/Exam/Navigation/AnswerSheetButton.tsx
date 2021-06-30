import React from 'react'

import { ExamNavLeft } from './styles'

interface EndExamButtonProps {
  onClick: (e) => any
}

const EndExamButton = (props: EndExamButtonProps): JSX.Element => {
  return (
    <ExamNavLeft onClick={props.onClick} id='end-exam-btn'>
      <span className='underline'>A</span>nswer sheet
    </ExamNavLeft>
  )
}

export default EndExamButton
