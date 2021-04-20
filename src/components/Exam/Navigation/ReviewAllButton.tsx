import React, { useEffect } from 'react'

import { ExamNavRight } from './styles'
import ExamIconReviewAll from '../../../examIcons/ReviewAll'

interface ReviewAllButtonProps {
  onClick: (e) => any
}

const ReviewAllButton = (props: ReviewAllButtonProps): JSX.Element => {
  const handleKeyboardShortcut = e => {
    if (e.altKey && e.keyCode === 65) {
      props.onClick(e)
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyboardShortcut)

    return () => {
      document.removeEventListener('keydown', handleKeyboardShortcut)
    }
  }, [])

  return (
    <ExamNavRight onClick={props.onClick} id='review-all-btn'>
      <ExamIconReviewAll />
      <div>
        Review <span className='underline'>A</span>ll
      </div>
    </ExamNavRight>
  )
}

export default ReviewAllButton
