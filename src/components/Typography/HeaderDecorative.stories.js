import React from 'react'
import Component from './HeaderDecorative'

const Template = args => <Component {...args} />

export const HeaderDecorative = Template.bind({})
HeaderDecorative.args = {
  children: 'Header Decorative'
}

export default {
  title: 'Atoms/Typography',
  component: Component
}
