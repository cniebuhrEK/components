// Button/Button.stories.js - Button story

import React from 'react'
import Button from './Button'
import { PlusIcon } from '../../icons'

const DefaultTemplate = args => <Button {...args}>{args.children}</Button>
const IconTemplate = args => <Button {...args}>{args.children}</Button>

export const Default = DefaultTemplate.bind({})
Default.args = {
  color: 'orange',
  children: 'Button'
}

export const IconButton = IconTemplate.bind({})
IconButton.args = {
  color: 'blue',
  children: 'Button',
  startIcon: <PlusIcon />
}

export default {
  title: 'Atoms/Button',
  component: Button
}
