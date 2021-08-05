// Navigation/Student/TopNav.stories.js - TopNav story

import React from 'react'
import TopNav from './TopNav'

const Template = args => <TopNav {...args} />

export const TopNavigation = Template.bind({})
TopNavigation.args = {
  avatar: '',
  menu: 'Menu',
  greeting: 'Hi, Jack!',
  links: [
    { label: 'Exams', url: 'https://examkrackers.com' },
    { label: 'Projections', url: 'https://examkrackers.com' },
    { label: 'Log Out', url: 'https://examkrackers.com' }
  ]
}

export default {
  title: 'Layout/Navigation/Student',
  component: TopNav
}
