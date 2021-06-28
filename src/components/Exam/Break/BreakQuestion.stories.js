// Exam/Break/BreakQuestion.stories.js - BreakQuestion stories

import React from 'react'
import BreakQuestion from './BreakQuestion'

const Template = args => <BreakQuestion {...args} />

export const ExamBreakQuestion = Template.bind({})
ExamBreakQuestion.args = {
  handleConfirm: () => {},
  handleCancel: () => {},
  breakTime: 10,
  breakOrder: 'first'
}

export default {
  title: 'Exam/Break',
  component: BreakQuestion
}
