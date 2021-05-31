import React from 'react'

import { Input } from './Input'

export default {
  title: 'Atoms/Input',
  component: Input
}

const Template = args => <Input {...args} />

export const BasicInput = Template.bind({})
BasicInput.args = {
  type: 'text'
}
