import React from 'react'
import { Breadcrumbs as Component, BreadcrumbItem } from 'components'

export default {
  title: 'Atoms/Breadcrumbs',
  component: Component
}

const Template = args => (
  <Component {...args}>
    <BreadcrumbItem>
      <a href='/link1'>Link 1</a>
    </BreadcrumbItem>
    <BreadcrumbItem>
      <a href='/link2'>Link 2</a>
    </BreadcrumbItem>
    <BreadcrumbItem>
      <a href='/link3'>Link 3</a>
    </BreadcrumbItem>
    <BreadcrumbItem active>
      <a href='/link4'>Link 4</a>
    </BreadcrumbItem>
  </Component>
)

export const Accordion = Template.bind({})
Accordion.args = {}
