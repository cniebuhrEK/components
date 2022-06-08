// IconButton/IconButton.stories.js - Button story

import React from 'react'
import IconButton from './IconButton'
import TrashIcon from '../../icons/Trash'

const DefaultComponent = args => (
  <IconButton {...args}>{args.children}</IconButton>
)

export const Default = DefaultComponent.bind({})
Default.args = {
  icon: <TrashIcon />,
  variant: 'filled'
}

export default {
  title: 'Atoms/Icon Button',
  component: IconButton
}
