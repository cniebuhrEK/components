// Tag/Tag.stories.js - Tag story

import React from 'react'
import SelectSwitcher from './SelectSwitcher'

const DefaultTemplate = args => <SelectSwitcher {...args} />

export const Default = DefaultTemplate.bind({})

Default.args = {
  label: 'Highlights',
  id: 'select-switcher',
  onChange: () => {},
  value: 'y',
  size: 'small',
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
