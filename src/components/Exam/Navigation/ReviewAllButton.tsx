import React from 'react'

import { ExamNavRight } from './styles'
import ExamIconReviewAll from '../../../examIcons/ReviewAll'

interface ReviewAllButtonProps {
  onClick: (e) => any
}

const ReviewAllButton = (props: ReviewAllButtonProps): JSX.Element => {
  return (
    <ExamNavRight onClick={props.onClick}>
      <ExamIconReviewAll />
      <div>
        Review <span className='underline'>A</span>ll
      </div>
    </ExamNavRight>
  )
}

export default ReviewAllButton
