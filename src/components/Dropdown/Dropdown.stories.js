import React from 'react'
import Dropdown from './Dropdown'

const Template = args => <Dropdown {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'Dropdown',
  disabled: false,
  options: [
    { label: 'Option #1' },
    { label: 'Option #2' },
    { label: 'Option #3' },
    { label: 'Option #4' }
  ]
}

export default {
  title: 'Atoms/Dropdown',
  component: Dropdown
}
