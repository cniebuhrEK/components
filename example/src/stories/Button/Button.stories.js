import React from 'react'

import { Button } from './Button'
import { PlayIcon } from 'components'

export default {
  title: 'Atoms/Button',
  component: Button
}

const PrimaryTemplate = args => <Button {...args}>{args.children}</Button>
const StartIconTemplate = args => <Button {...args}>{args.children}</Button>

export const Primary = PrimaryTemplate.bind({})
Primary.args = {
  color: 'orange',
  children: 'Button'
}

export const StartIcon = StartIconTemplate.bind({})
StartIcon.args = {
  color: 'green',
  children: 'Button',
  startIcon: <PlayIcon />
}
