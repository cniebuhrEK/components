// Exam/Pause/Pause.stories.js - Pause story

import React from 'react'
import { PauseExam } from 'examkrackers-components'

const Template = args => <PauseExam {...args} />

export const ExamPause = Template.bind({})
ExamPause.args = {
  handlePause: e => {}
}

export default {
  title: 'Exam/Pause',
  component: PauseExam
}
