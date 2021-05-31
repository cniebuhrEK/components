import React from 'react'

import { Link as LinkComponent } from './Link'

export default {
  title: 'Atoms/Link',
  component: LinkComponent
}

const Template = args => <LinkComponent {...args} />

export const Link = Template.bind({})
Link.args = {
  isActive: false,
  name: 'Forgot password?'
}
