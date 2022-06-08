import React from 'react'
import { ExamBreakQuestion as Component } from 'examkrackers-components'

const Template = args => <Component {...args} />

export const ExamBreakQuestion = Template.bind({})
ExamBreakQuestion.args = {
  handleConfirm: () => {},
  handleCancel: () => {},
  breakTime: 10,
  breakOrder: 'first'
}

export default {
  title: 'Exam/Break',
  component: Component
}
