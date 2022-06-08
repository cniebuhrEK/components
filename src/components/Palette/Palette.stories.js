// Palette/Palette.stories.js - Palette story

import React from 'react'
import Palette from './Palette'

const Template = args => <Palette {...args} />

export const Component = Template.bind({})
Component.args = {}

export default {
  title: 'Palette/Palette',
  component: Component
}
