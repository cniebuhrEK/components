import React from 'react'
import { ToggleSwitch } from 'examkrackers-components'

const DefaultTemplate = args => <ToggleSwitch {...args} />

export const Default = DefaultTemplate.bind({})
Default.args = {
  id: 'slider',
  name: 'slider',
  label: 'on',
  value: false,
  checked: false,
  disabled: false
}

export default {
  title: 'Atoms/Toggle Switch',
  component: ToggleSwitch
}
