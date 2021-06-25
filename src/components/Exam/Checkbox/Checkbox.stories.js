// Exam/Checkbox/Checkbox.stories.js - Checkbox story

import React from 'react'
import CheckboxContainer from './mock'

const Template = args => <CheckboxContainer {...args} />

export const ExamCheckbox = Template.bind({})
ExamCheckbox.args = {
  name: 'question',
  isSelected: true,
  onChange: () => {}
}

export default {
  title: 'Exam/Checkbox',
  component: CheckboxContainer
}
