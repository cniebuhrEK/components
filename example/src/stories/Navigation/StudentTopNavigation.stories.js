import React from 'react'
import { StudentTopNavigation as Component } from 'components'

export default {
  title: 'Atoms/Navigation',
  component: Component
}

const Template = args => <Component {...args} />

export const StudentTopNavigation = Template.bind({})
StudentTopNavigation.args = {
  avatar: '/assets/illustrations/AvatarPlaceholder.png',
  helloText: 'Hi, user',
  logoutText: 'Log out',
  handleLogout: () => {}
}
