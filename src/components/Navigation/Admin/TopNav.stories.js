// Navigation/Admin/TopNav.stories.js - TopNav story

import React from 'react'
import TopNav from './TopNav'

const Template = args => <TopNav {...args} />

export const TopNavigation = Template.bind({})
TopNavigation.args = {
  username: 'Hi, user@examkrackers.com',
  logoutName: 'Log out',
  handleLogout: () => {}
}

export default {
  title: 'Layout/Navigation/Admin',
  component: TopNav
}
