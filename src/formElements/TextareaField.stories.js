import React from 'react'
import Textarea from './TextareaField'

const Template = args => <Textarea {...args} />

export const TextareaField = Template.bind({})
TextareaField.args = {
  name: 'test',
  id: 'test',
  onChange: (name, value) => {},
  validate: (name, validationFunc) => {},
  label: 'Test',
  value: '',
  required: true,
  disabled: false,
  reset: false,
  t: (key, options) => {}
}

export default {
  title: 'Form elements/Textarea',
  component: Textarea
}
