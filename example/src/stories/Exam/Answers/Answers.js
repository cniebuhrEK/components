import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { ExamAnswers as AnswersComponent } from 'components'

/**
 * Primary UI component for user interaction
 */
export const Answers = props => {
  const [selectedAnswer, setSelectedAnswer] = useState('')

  return (
    <>
      <AnswersComponent
        onSelectAnswer={setSelectedAnswer}
        selectedAnswerCode={selectedAnswer}
        {...props}
      />
    </>
  )
}

Answers.propTypes = {
  answers: PropTypes.array,
  onSelectAnswer: PropTypes.func,
  selectedAnswerCode: PropTypes.oneOf(['A', 'B', 'C', 'D', ''])
}

Answers.defaultProps = {
  answers: [
    { answerCode: 'A', answerContent: 'Yes' },
    { answerCode: 'B', answerContent: 'No' }
  ]
}
