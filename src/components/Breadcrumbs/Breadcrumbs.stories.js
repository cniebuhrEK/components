// Breadcrumbs/Breadcrumbs.stories.js - Breadcrumbs story

import React from 'react'
import Breadcrumbs from './Breadcrumbs'

const Template = args => (
  <Breadcrumbs {...args}>
    <a href='/link1'>Link 1</a>
    <a href='/link2'>Link 2</a>
    <a href='/link3'>Link 3</a>
    <a href='/link4'>Link 4</a>
  </Breadcrumbs>
)

export const Primary = Template.bind({})
Primary.args = {}

export default {
  title: 'Atoms/Breadcrumbs',
  component: Breadcrumbs
}
