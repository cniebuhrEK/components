import React from 'react'
import { Heading2 as Component } from 'examkrackers-components'

const Template = args => <Component {...args} />

export const Heading2 = Template.bind({})
Heading2.args = {
  bold: true,
  children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
}

export default {
  title: 'Atoms/Typography',
  component: Component
}
