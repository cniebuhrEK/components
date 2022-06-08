import React from 'react'
import { HighlightColorPicker } from 'examkrackers-components'

const Template = args => <HighlightColorPicker {...args} />

export const Default = Template.bind({})
Default.args = {}

export default {
  title: 'Atoms/HighlightColorPicker',
  component: HighlightColorPicker
}
