import React from 'react'
import ArrowNav from './ArrowNav'

const Template = args => <ArrowNav {...args} />

export const Default = Template.bind({})
Default.args = {
  text: 'Next Page',
  direction: 'right'
}

export default {
  title: 'Atoms/Arrow Navigation',
  component: ArrowNav
}
