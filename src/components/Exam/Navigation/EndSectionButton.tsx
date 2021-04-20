import React, { useEffect } from 'react'

import { ExamNavLeft } from './styles'
import ExamIconEndSection from '../../../examIcons/EndSection'
import { CHECK_SHORTCUT } from '../../../utils/shortcuts'

interface EndSectionButtonProps {
  onClick: (e) => any
}

const EndSectionButton = (props: EndSectionButtonProps): JSX.Element => {
  const handleKeyboardShortcut = e => {
    if (CHECK_SHORTCUT(e).altE) {
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
    <ExamNavLeft onClick={props.onClick} id='end-section-btn'>
      <ExamIconEndSection />
      <div>
        <span className='underline'>E</span>nd section
      </div>
    </ExamNavLeft>
  )
}

export default EndSectionButton
