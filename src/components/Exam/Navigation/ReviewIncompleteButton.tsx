import React from 'react'

import { ExamNavRight } from './styles'
import ExamIconReviewIncomplete from '../../../examIcons/Incomplete'

interface ReviewIncompleteButtonProps {
  onClick: (e) => any
}

const ReviewIncompleteButton = (props: ReviewIncompleteButtonProps): JSX.Element => {
  return (
    <ExamNavRight onClick={props.onClick}>
      <ExamIconReviewIncomplete />
      <div>
        Review <span className='underline'>I</span>ncomplete
      </div>
    </ExamNavRight>
  )
}

export default ReviewIncompleteButton
