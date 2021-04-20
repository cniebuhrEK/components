import React, { useEffect } from 'react'

import { ExamNavRight } from './styles'
import ExamIconPrevious from '../../../examIcons/Previous'

interface PreviousButtonProps {
  onClick: (e) => any
}

const PreviousButton = (props: PreviousButtonProps): JSX.Element => {
  const handleKeyboardShortcut = e => {
    if (e.altKey && e.keyCode === 80) {
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
    <ExamNavRight onClick={props.onClick} id='previous-btn'>
      <ExamIconPrevious />
      <div>
        <span className='underline'>P</span>revious
      </div>
    </ExamNavRight>
  )
}

export default PreviousButton
