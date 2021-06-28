import React from 'react'
import HeaderNormalComponent from './HeaderNormal'

const Template = args => <HeaderNormalComponent {...args} />

export const HeaderNormal = Template.bind({})
HeaderNormal.args = {
  children: 'Header Normal'
}

export default {
  title: 'Typography/Header',
  component: HeaderNormalComponent
}
