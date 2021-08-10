// IconButton/IconButton.stories.js - Button story

import React from 'react'
import IconButton from './IconButton'
import StartIcon from '../../icons/Add'

const DefaultComponent = args => (
  <IconButton {...args}>{args.children}</IconButton>
)

export const Default = DefaultComponent.bind({})
Default.args = {
  icon: <StartIcon />,
  variant: 'filled'
}

export default {
  title: 'Atoms/Icon Button',
  component: IconButton
}
