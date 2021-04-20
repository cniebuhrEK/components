import React, { useEffect } from 'react'

import { ExamNavRight } from './styles'
import ExamIconReviewFlagged from '../../../examIcons/FlagMark'
import { CHECK_SHORTCUT } from '../../../utils/shortcuts'

interface ReviewFlaggedButtonProps {
  onClick: (e) => any
}

const ReviewFlaggedButton = (props: ReviewFlaggedButtonProps): JSX.Element => {
  const handleKeyboardShortcut = e => {
    if (CHECK_SHORTCUT(e).altR) {
      props.onClick(e)
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyboardShortcut)

    return () => {
      document.removeEventListener('keydown', handleKeyboardShortcut)
    }
  }, [props.onClick])

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
