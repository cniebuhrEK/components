import React from 'react'
import HighlightColorPicker from './HighlightColorPicker'

const Template = args => <HighlightColorPicker {...args} />

export const Default = Template.bind({})
Default.args = {}

export default {
  title: 'Atoms/HighlightColorPicker',
  component: HighlightColorPicker
}
