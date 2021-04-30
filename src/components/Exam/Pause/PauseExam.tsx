import React from 'react'

import { PauseExamContainer, PauseButton } from './styles'

interface PauseExamProps {
  handlePause: (e) => void
}

const PauseExam = (props: PauseExamProps): JSX.Element => {
  const { handlePause } = props

  const pauseHandler = e => {
    e.preventDefault()
    handlePause(e)
  }

  return (
    <PauseExamContainer>
      <PauseButton id='pause-exam' href='#' onClick={pauseHandler}>
        Pause
      </PauseButton>
    </PauseExamContainer>
  )
}

PauseExam.defaultProps = {}

export default PauseExam
