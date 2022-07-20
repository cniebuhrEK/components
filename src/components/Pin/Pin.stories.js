import React from 'react'
import Pin from './Pin'

const DefaultTemplate = args => <Pin {...args} />

export const Default = DefaultTemplate.bind({})

Default.args = {
  variant: 'A'
}

export default {
  title: 'Atoms/Pin',
  component: Pin
}
