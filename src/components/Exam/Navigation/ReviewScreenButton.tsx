import React from 'react'

import { ExamNavLeft } from './styles'
import ExamIconEndSection from '../../../examIcons/EndSection'

interface ReviewScreenButtonProps {
  onClick: (e) => any
}

const ReviewScreenButton = (props: ReviewScreenButtonProps): JSX.Element => {
  return (
    <ExamNavLeft className='no-border' onClick={props.onClick}>
      <ExamIconEndSection />
      <div>
        Revie<span className='underline'>w</span> screen
      </div>
    </ExamNavLeft>
  )
}

export default ReviewScreenButton
