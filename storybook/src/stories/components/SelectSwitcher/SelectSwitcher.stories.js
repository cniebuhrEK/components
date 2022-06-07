import React from 'react'
import { SelectSwitcher } from 'examkrackers-components'

const DefaultTemplate = args => <SelectSwitcher {...args} />

export const Default = DefaultTemplate.bind({})

Default.args = {
  label: 'Highlights',
  id: 'select-switcher',
  onChange: () => {},
  value: 'y',
  options: [
    {
      label: 'Yours',
      value: 'y'
    },
    {
      label: "EK's",
      value: 'e'
    },
    {
      label: 'None',
      value: 'n'
    }
  ]
}

export default {
  title: 'Atoms/SelectSwitcher',
  component: SelectSwitcher
}
