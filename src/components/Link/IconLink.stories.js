import React from 'react'
import IconLink from './IconLink'
import { UsersIcon } from '../../icons'

const Template = args => <IconLink {...args} />

export const Default = Template.bind({})
Default.args = {
  isActive: false,
  disabled: false,
  light: true,
  icon: <UsersIcon />,
  name: 'Log out'
}

export default {
  title: 'Atoms/Link Button',
  component: IconLink
}
