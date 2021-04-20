import React, { useEffect } from 'react'

import { ExamNavRight } from './styles'
import ExamIconNext from '../../../examIcons/Next'

interface NextButtonProps {
  onClick: (e) => any
}

const NextButton = (props: NextButtonProps): JSX.Element => {
  const handleKeyboardShortcut = e => {
    if (e.altKey && e.keyCode === 78) {
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
    <ExamNavRight onClick={props.onClick} id='next-btn'>
      <div>
        <span className='underline'>N</span>ext
      </div>
      <ExamIconNext />
    </ExamNavRight>
  )
}

export default NextButton
