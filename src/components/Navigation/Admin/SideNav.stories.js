// Navigation/Admin/SideNav.stories.js - SideNav story

import React from 'react'
import SideNav from './SideNav'
import { ListIcon, UserIcon } from '../../../icons'

const Template = args => <SideNav {...args} />

export const SideNavigation = Template.bind({})
SideNavigation.args = {
  links: [
    {
      name: 'Admins Manager',
      href: 'https://www.examkrackers.com',
      isActive: true,
      icon: <UserIcon />,
      id: 'admins-manager'
    },
    {
      name: 'Exam Editor',
      href: 'https://www.examkrackers.com',
      isActive: false,
      icon: <ListIcon />,
      id: 'exam-editor'
    },
    {
      name: 'Students list',
      href: 'https://www.examkrackers.com',
      isActive: false,
      icon: <UserIcon />,
      id: 'students-list'
    }
  ]
}

export default {
  title: 'Layout/Navigation/Admin',
  component: SideNav
}
