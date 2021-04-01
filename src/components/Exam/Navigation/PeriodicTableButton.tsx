import React, { useState } from 'react'

import { ExamNavLeft } from './styles'
import ExamIconPeriodic from '../../../examIcons/Periodic'
import PeriodicTable from '../Modal/variants/PeriodicTable'

const EndExamButton = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)

  return (
    <div>
      <ExamNavLeft onClick={handleOpen} id='periodic-table-btn'>
        <ExamIconPeriodic />
        <div>
          Periodic <span className='underline'>T</span>able
        </div>
      </ExamNavLeft>
      <PeriodicTable handleClose={handleClose} open={isOpen} />
    </div>
  )
}

export default EndExamButton
