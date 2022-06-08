// Exam/Answers/mockAnswers.tsx - Mock Answers component

import React from 'react'
import Answers from './Answers'

interface AnswersProps {
  answers: any[]
  onSelectAnswer: any
  selectedAnswerCode: 'A' | 'B' | 'C' | 'D' | ''
}

/**
 * Primary UI component for user interaction
 */
const AnswersComponent = (props: AnswersProps) => {
  const [selectedAnswer, setSelectedAnswer] = React.useState('')

  return (
    <>
      <Answers
        {...props}
        onSelectAnswer={setSelectedAnswer}
        selectedAnswerCode={selectedAnswer}
      />
    </>
  )
}

AnswersComponent.defaultProps = {
  answers: [
    { answerCode: 'A', answerContent: 'Yes' },
    { answerCode: 'B', answerContent: 'No' }
  ]
}

export default AnswersComponent
