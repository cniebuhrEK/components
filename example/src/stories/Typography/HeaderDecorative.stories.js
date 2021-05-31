import React from 'react'

import { HeaderDecorative as HeaderDecorativeComponent } from './HeaderDecorative'

export default {
  title: 'Typography/Header',
  component: HeaderDecorativeComponent
}

const Template = args => <HeaderDecorativeComponent {...args} />

export const HeaderDecorative = Template.bind({})
HeaderDecorative.args = {
  children: 'Header Decorative'
}
