// IconButton/IconButton.stories.js - Button story

import React from 'react'
import IconButton from './IconButton'

const DefaultComponent = args => (
  <IconButton {...args}>{args.children}</IconButton>
)

export const Default = DefaultComponent.bind({})
Default.args = {}
export default {
  title: 'Atoms/Icon Button',
  component: IconButton
}
