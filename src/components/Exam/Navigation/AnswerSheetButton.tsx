import React from 'react'
import { ExamNavLeft } from './styles'

interface EndExamButtonProps {
  onClick: (e: any) => any
}

const EndExamButton = (props: EndExamButtonProps): JSX.Element => {
  return (
    <ExamNavLeft onClick={props.onClick} id='end-exam-btn'>
      <span className='underline'>A</span>nswer Sheet
    </ExamNavLeft>
  )
}

export default EndExamButton
