import React from 'react'
import { IconButton, TrashIcon } from 'examkrackers-components'

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
