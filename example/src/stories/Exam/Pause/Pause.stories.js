import React from 'react'

import { PauseExam } from './Pause'

export default {
  title: 'Exam/Pause',
  component: PauseExam
}

const Template = args => <PauseExam {...args} />

export const ExamPause = Template.bind({})
ExamPause.args = {
  handlePause: e => {}
}
