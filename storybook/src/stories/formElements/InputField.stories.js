import React from 'react'
import { InputField as Input } from 'examkrackers-components'

const Template = args => <Input {...args} />

export const InputField = Template.bind({})
InputField.args = {
  name: 'test',
  id: 'test',
  type: 'text',
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
  title: 'Form elements/Input',
  component: Input
}
