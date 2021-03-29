import React from 'react'

import { ExamNavLeft } from './styles'
import ExamIconEndSection from '../../../examIcons/EndSection'

interface EndExamButtonProps {
  onClick: (e) => any
}

const EndExamButton = (props: EndExamButtonProps): JSX.Element => {
  return (
    <ExamNavLeft onClick={props.onClick}>
      <ExamIconEndSection />
      <div>
        <span className='underline'>E</span>nd exam
      </div>
    </ExamNavLeft>
  )
}

export default EndExamButton
