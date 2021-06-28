import React from 'react'
import HeaderLightComponent from './HeaderLight'

export default {
  title: 'Typography/Header',
  component: HeaderLightComponent
}

const Template = args => <HeaderLightComponent {...args} />

export const HeaderLight = Template.bind({})
HeaderLight.args = {
  children: 'Header Light'
}
