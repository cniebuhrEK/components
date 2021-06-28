// Input/Input.stories.js - Input story

import React from 'react'
import Input from './Input'

const Template = args => <Input {...args} />

export const BasicInput = Template.bind({})
BasicInput.args = {
  type: 'text'
}

export default {
  title: 'Atoms/Input',
  component: Input
}
