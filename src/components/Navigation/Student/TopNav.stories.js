// Navigation/Student/TopNav.stories.js - TopNav story

import React from 'react'
import TopNav from './TopNav'

const Template = args => <TopNav {...args} />

export const TopNavigation = Template.bind({})
TopNavigation.args = {
  avatar: '/assets/illustrations/AvatarPlaceholder.png',
  helloText: 'Hi, user',
  logoutText: 'Log out',
  handleLogout: () => {}
}

export default {
  title: 'Layout/Navigation/Student',
  component: TopNav
}
