// Exam/Checkbox/Checkbox.stories.js - Checkbox story

import React from 'react'
import CheckboxContainer from './mock'
import CheckboxDangerContainer from './CheckboxDangerMock'

const Template = args => <CheckboxContainer {...args} />
const CheckboxDangerTemplate = args => <CheckboxDangerContainer {...args} />

export const ExamCheckbox = Template.bind({})
ExamCheckbox.args = {
  name: 'question',
  isSelected: true,
  onChange: () => {}
}

export const ExamCheckboxDanger = CheckboxDangerTemplate.bind({})
ExamCheckboxDanger.args = {
  label: 'Label',
  name: 'question',
  isSelected: true,
  onChange: () => {}
}

export default {
  title: 'Exam/Checkbox',
  component: CheckboxContainer
}
