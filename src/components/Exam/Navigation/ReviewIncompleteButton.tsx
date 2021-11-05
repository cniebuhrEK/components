import React, { useEffect } from 'react'

import { ExamNavRight } from './styles'
import ExamIconReviewIncomplete from '../../../examIcons/Incomplete'
import { CHECK_SHORTCUT } from '../../../utils/shortcuts'

interface ReviewIncompleteButtonProps {
  onClick: (e) => any
}

const ReviewIncompleteButton = (
  props: ReviewIncompleteButtonProps
): JSX.Element => {
  const { onClick } = props

  const handleKeyboardShortcut = e => {
    e.preventDefault()
    if (CHECK_SHORTCUT(e).altI) {
      props.onClick(e)
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyboardShortcut)

    return () => {
      document.removeEventListener('keydown', handleKeyboardShortcut)
    }
  }, [onClick])

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
