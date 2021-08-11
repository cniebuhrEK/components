import React from 'react'
import Component from './Heading1'

const Template = args => <Component {...args} />

export const Heading1 = Template.bind({})
Heading1.args = {
  bold: true,
  children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
}

export default {
  title: 'Atoms/Typography',
  component: Component
}
