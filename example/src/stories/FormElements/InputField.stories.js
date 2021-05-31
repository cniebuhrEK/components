import React from 'react'

import { Input } from './InputField'

export default {
  title: 'Form elements/Input',
  component: Input
}

const Template = args => <Input {...args} />

export const InputField = Template.bind({})
InputField.args = {
  type: 'text'
}
