import React, { useEffect } from 'react'

import { ExamNavLeft } from './styles'
import ExamIconPeriodic from '../../../examIcons/Periodic'

interface PeriodicTableButtonProps {
  onClick: (e) => any
}

const PeriodicTableButton = ({
  onClick
}: PeriodicTableButtonProps): JSX.Element => {
  const handleKeyboardShortcut = e => {
    if (e.altKey && e.keyCode === 84) {
      onClick(e)
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyboardShortcut)

    return () => {
      document.removeEventListener('keydown', handleKeyboardShortcut)
    }
  }, [])

  return (
    <div>
      <ExamNavLeft onClick={onClick} id='periodic-table-btn'>
        <ExamIconPeriodic />
        <div>
          Periodic <span className='underline'>T</span>able
        </div>
      </ExamNavLeft>
    </div>
  )
}

export default PeriodicTableButton
