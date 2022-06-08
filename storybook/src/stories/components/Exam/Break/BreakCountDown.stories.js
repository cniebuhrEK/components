import React from 'react'
import { ExamBreakCountDown as Component } from 'examkrackers-components'

const Template = args => <Component {...args} />

export const ExamBreakCountDown = Template.bind({})
ExamBreakCountDown.args = {
  handleResume: () => {},
  userName: 'Ann Brown',
  examTitle: 'EK-1',
  timeRemaining: '00:09:59'
}

export default {
  title: 'Exam/Break',
  component: Component
}
