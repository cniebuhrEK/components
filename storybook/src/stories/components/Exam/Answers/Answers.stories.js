import React from 'react'
import { ExamAnswers as Component } from 'examkrackers-components'

const Template = args => {
  const [selectedAnswer, setSelectedAnswer] = React.useState('')

  return (
    <>
      <Component
        {...args}
        onSelectAnswer={setSelectedAnswer}
        selectedAnswerCode={selectedAnswer}
      />
    </>
  )
}

export const ExamAnswers = Template.bind({})
ExamAnswers.args = {
  answers: [
    { answerCode: 'A', answerContent: 'Yes' },
    { answerCode: 'B', answerContent: 'No' }
  ]
}

export default {
  title: 'Exam/Answers',
  component: Component
}
