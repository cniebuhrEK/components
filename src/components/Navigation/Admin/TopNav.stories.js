// Navigation/Student/TopNav.stories.js - TopNav story

import React from 'react'
import TopNav from '../Student/TopNav'
import { UsersIcon } from '../../../icons'

const Template = args => <TopNav {...args} />

export const TopNavigation = Template.bind({})
TopNavigation.args = {
  avatar: '',
  menu: 'Menu',
  greeting: 'Hi, Jack!',
  links: [
    {
      label: 'Admin Manager',
      url: 'https://examkrackers.com',
      icon: <UsersIcon width='24px' height='24px' />
    },
    {
      label: 'Exam Wysiwyg',
      url: 'https://examkrackers.com',

      icon: <UsersIcon width='24px' height='24px' />
    },
    {
      label: 'Student List',
      url: 'https://examkrackers.com',

      icon: <UsersIcon width='24px' height='24px' />
    }
  ]
}

export default {
  title: 'Layout/Navigation/Admin',
  component: TopNav
}
