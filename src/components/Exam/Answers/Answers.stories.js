// Exam/Answers/Answers.stories.js - Answers story

import React from 'react'
import AnswersMock from './mock'

export default {
  title: 'Exam/Answers',
  component: AnswersMock
}

const Template = args => <AnswersMock {...args} />

export const ExamAnswers = Template.bind({})
ExamAnswers.args = {
  answers: [
    { answerCode: 'A', answerContent: 'Yes' },
    { answerCode: 'B', answerContent: 'No' }
  ]
}
