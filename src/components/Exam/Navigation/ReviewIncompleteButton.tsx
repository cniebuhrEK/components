import React, { useEffect } from 'react'

import { ExamNavRight } from './styles'
import ExamIconReviewIncomplete from '../../../examIcons/Incomplete'

interface ReviewIncompleteButtonProps {
  onClick: (e) => any
}

const ReviewIncompleteButton = (props: ReviewIncompleteButtonProps): JSX.Element => {
  const handleKeyboardShortcut = e => {
    if (e.altKey && e.keyCode === 73) {
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
    <ExamNavRight onClick={props.onClick} id='review-incomplete-btn'>
      <ExamIconReviewIncomplete />
      <div>
        Review <span className='underline'>I</span>ncomplete
      </div>
    </ExamNavRight>
  )
}

export default ReviewIncompleteButton
