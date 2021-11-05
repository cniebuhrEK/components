import React, { useEffect } from 'react'

import { ExamNavLeft } from './styles'
import ExamIconEndSection from '../../../examIcons/EndSection'
import { CHECK_SHORTCUT } from '../../../utils/shortcuts'

interface ReviewScreenButtonProps {
  onClick: (e) => any
}

const ReviewScreenButton = (props: ReviewScreenButtonProps): JSX.Element => {
  const { onClick } = props

  const handleKeyboardShortcut = e => {
    e.preventDefault()
    if (CHECK_SHORTCUT(e).altW) {
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
