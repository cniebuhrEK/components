import React from 'react'
import { Breadcrumbs as Component } from 'components'

export default {
  title: 'Atoms/Breadcrumbs',
  component: Component
}

const Template = args => (
  <Component {...args}>
    <a href='/link1'>Link 1</a>
    <a href='/link2'>Link 2</a>
    <a href='/link3'>Link 3</a>
    <a href='/link4'>Link 4</a>
  </Component>
)

export const Accordion = Template.bind({})
Accordion.args = {}
