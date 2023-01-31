import React from 'react'
import Checkbox from './Checkbox'
import { CheckboxMock } from './mock'

const Template = args => <CheckboxMock {...args} />

export const Default = Template.bind({})
Default.args = {
  name: 'question',
  isSelected: true,
  outlined: false,
  intersection: false,
  onChange: () => {}
}

export default {
  title: 'Atoms/Checkbox',
  component: Checkbox
}
