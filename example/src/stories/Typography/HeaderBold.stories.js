import React from 'react'

import { HeaderBold as HeaderBoldComponent } from './HeaderBold'

export default {
  title: 'Typography/Header',
  component: HeaderBoldComponent
}

const Template = args => <HeaderBoldComponent {...args} />

export const HeaderBold = Template.bind({})
HeaderBold.args = {
  children: 'Header Bold'
}
