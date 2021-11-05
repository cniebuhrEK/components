import React, { useEffect } from 'react'

import { ExamNavRight } from './styles'
import ExamIconReviewAll from '../../../examIcons/ReviewAll'
import { CHECK_SHORTCUT } from '../../../utils/shortcuts'

interface ReviewAllButtonProps {
  onClick: (e) => any
}

const ReviewAllButton = (props: ReviewAllButtonProps): JSX.Element => {
  const handleKeyboardShortcut = e => {
    e.preventDefault()
    if (CHECK_SHORTCUT(e).altA) {
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
    <ExamNavRight onClick={props.onClick} id='review-all-btn'>
      <ExamIconReviewAll />
      <div>
        Review <span className='underline'>A</span>ll
      </div>
    </ExamNavRight>
  )
}

export default ReviewAllButton
