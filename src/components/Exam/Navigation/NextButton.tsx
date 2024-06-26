import React, { useEffect } from 'react'

import { ExamNavRight } from './styles'
import ExamIconNext from '../../../examIcons/Next'
import { CHECK_SHORTCUT } from '../../../utils/shortcuts'

interface NextButtonProps {
  onClick: (e) => any
}

const NextButton = (props: NextButtonProps): JSX.Element => {
  const handleKeyboardShortcut = e => {
    if (CHECK_SHORTCUT(e).altN) {
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
    <ExamNavRight onClick={props.onClick} id='next-btn'>
      <div>
        <span className='underline'>N</span>ext
      </div>
      <ExamIconNext />
    </ExamNavRight>
  )
}

export default NextButton
