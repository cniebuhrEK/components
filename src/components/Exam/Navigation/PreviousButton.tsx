import React, { useEffect } from 'react'

import { ExamNavRight } from './styles'
import ExamIconPrevious from '../../../examIcons/Previous'
import { CHECK_SHORTCUT } from '../../../utils/shortcuts'

interface PreviousButtonProps {
  onClick: (e) => any
}

const PreviousButton = (props: PreviousButtonProps): JSX.Element => {
  const handleKeyboardShortcut = e => {
    if (CHECK_SHORTCUT(e).altP) {
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
