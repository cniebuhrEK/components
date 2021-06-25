import React from 'react'
import HeaderBoldComponent from './HeaderBold'

const Template = args => <HeaderBoldComponent {...args} />

export const HeaderBold = Template.bind({})
HeaderBold.args = {
  children: 'Header Bold'
}

export default {
  title: 'Typography/Header',
  component: HeaderBoldComponent
}
