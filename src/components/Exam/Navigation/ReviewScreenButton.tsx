import React, { useEffect } from 'react'

import { ExamNavLeft } from './styles'
import ExamIconEndSection from '../../../examIcons/EndSection'

interface ReviewScreenButtonProps {
  onClick: (e) => any
}

const ReviewScreenButton = (props: ReviewScreenButtonProps): JSX.Element => {
  const handleKeyboardShortcut = e => {
    if (e.altKey && e.keyCode === 87) {
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
    <ExamNavLeft
      className='no-border'
      onClick={props.onClick}
      id='review-screen-btn'
    >
      <ExamIconEndSection />
      <div>
        Revie<span className='underline'>w</span> screen
      </div>
    </ExamNavLeft>
  )
}

export default ReviewScreenButton
