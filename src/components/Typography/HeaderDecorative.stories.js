import React from 'react'
import HeaderDecorativeComponent from './HeaderDecorative'

const Template = args => <HeaderDecorativeComponent {...args} />

export const HeaderDecorative = Template.bind({})
HeaderDecorative.args = {
  children: 'Header Decorative'
}

export default {
  title: 'Typography/Header',
  component: HeaderDecorativeComponent
}
