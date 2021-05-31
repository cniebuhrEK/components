import React from 'react'

import { IconLink as IconLinkComponent } from './IconLink'

export default {
  title: 'Atoms/Link',
  component: IconLinkComponent
}

const Template = args => <IconLinkComponent {...args} />

export const IconLink = Template.bind({})
IconLink.args = {
  isActive: false,
  disabled: false,
  light: false,
  name: 'Log out'
}
