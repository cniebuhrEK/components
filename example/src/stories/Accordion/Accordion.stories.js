import React from 'react'
import { Accordion as Component } from 'components'

export default {
  title: 'Atoms/Accordion',
  component: Component
}

const Template = args => <Component {...args}>{args.children}</Component>

export const Accordion = Template.bind({})
Accordion.args = {
  text: 'Accordion',
  children: 'This is nested'
}
