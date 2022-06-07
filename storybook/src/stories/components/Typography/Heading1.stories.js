import React from 'react'
import { Heading1 as Component } from 'examkrackers-components'

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
