import React from 'react'

import { PauseExamContainer, PauseButton } from './styles'

interface PauseExamProps {
  handlePause: (e) => void
}

const PauseExam = (props: PauseExamProps): JSX.Element => {
  const { handlePause } = props

  return (
    <PauseExamContainer>
      <PauseButton id='pause-exam' href='#' onClick={handlePause}>
        Pause
      </PauseButton>
    </PauseExamContainer>
  )
}

PauseExam.defaultProps = {}

export default PauseExam
