import React, { useEffect } from 'react'

import { ExamNavRight } from './styles'
import ExamIconReviewFlagged from '../../../examIcons/FlagMark'

interface ReviewFlaggedButtonProps {
  onClick: (e) => any
}

const ReviewFlaggedButton = (props: ReviewFlaggedButtonProps): JSX.Element => {
  const handleKeyboardShortcut = e => {
    if (e.altKey && e.keyCode === 82) {
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
    <ExamNavRight onClick={props.onClick} id='review-flagged-btn'>
      <ExamIconReviewFlagged />
      <div>
        <span className='underline'>R</span>eview flagged
      </div>
    </ExamNavRight>
  )
}

export default ReviewFlaggedButton
