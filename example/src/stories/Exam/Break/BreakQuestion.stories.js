import React from 'react'

import { ExamBreakQuestion as BreakQuestion } from './BreakQuestion'

export default {
  title: 'Exam/Break',
  component: BreakQuestion
}

const Template = args => <BreakQuestion {...args} />

export const ExamBreakQuestion = Template.bind({})
ExamBreakQuestion.args = {
  handleConfirm: () => {},
  handleCancel: () => {},
  breakTime: 10,
  breakOrder: 'first'
}
