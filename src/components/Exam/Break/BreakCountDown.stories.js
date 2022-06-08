// Break/BreakCountDown.stories.js - BreakCountDown story

import React from 'react'
import BreakCountDown from './BreakCountDown'

const Template = args => <BreakCountDown {...args} />

export const ExamBreakCountDown = Template.bind({})
ExamBreakCountDown.args = {
  handleResume: () => {},
  userName: 'Ann Brown',
  examTitle: 'EK-1',
  timeRemaining: '00:09:59'
}

export default {
  title: 'Exam/Break',
  component: BreakCountDown
}
