import React from 'react'

import { ExamNavLeft } from './styles'
import ExamIconPeriodic from '../../../examIcons/Periodic'
import { CHECK_SHORTCUT } from '../../../utils/shortcuts'

interface PeriodicTableButtonProps {
  onClick: (e: any) => any
}

const PeriodicTableButton = ({
  onClick
}: PeriodicTableButtonProps): JSX.Element => {
  const handleKeyboardShortcut = (e: any) => {
    if (CHECK_SHORTCUT(e).altT) {
      onClick(e)
    }
  }

  React.useEffect(() => {
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
