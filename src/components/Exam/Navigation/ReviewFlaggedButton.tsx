import React from 'react'

import { ExamNavRight } from './styles'
import ExamIconReviewFlagged from '../../../examIcons/FlagMark'

interface ReviewFlaggedButtonProps {
  onClick: (e) => any
}

const ReviewFlaggedButton = (props: ReviewFlaggedButtonProps): JSX.Element => {
  return (
    <ExamNavRight onClick={props.onClick} id='review-flagged-btn'>
      <ExamIconReviewFlagged />
      <div>
        <span className='underline'>R</span>eview flagged
      </div>
    </ExamNavRight>
  )
}

export default ReviewFlaggedButton
