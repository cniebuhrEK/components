import React from 'react'
import IconLink from './IconLink'

const Template = args => <IconLink {...args} />

export const Icon = Template.bind({})
Icon.args = {
  isActive: false,
  disabled: false,
  light: false,
  name: 'Log out'
}

export default {
  title: 'Atoms/Link',
  component: IconLink
}
