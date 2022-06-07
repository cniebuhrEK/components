import React from 'react'
import { Dropdown } from 'examkrackers-components'

const Template = args => <Dropdown {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'Dropdown',
  disabled: false,
  activeId: 'menu-option-1',
  options: [
    {
      id: 'menu-option-1',
      label: 'Option #1',
      onClick: () => console.log('1')
    },
    { id: 'menu-option-2', label: 'Option #2' },
    { id: 'menu-option-3', label: 'Option #3' },
    { id: 'menu-option-4', label: 'Option #4' },
    { id: 'menu-option-5', label: 'Option #5' },
    { id: 'menu-option-6', label: 'Option #6' },
    { id: 'menu-option-7', label: 'Option #7' },
    { id: 'menu-option-8', label: 'Option #8' }
  ]
}

export default {
  title: 'Atoms/Dropdown',
  component: Dropdown
}
