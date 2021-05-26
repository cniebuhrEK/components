import React from 'react'

import { AdminSideNavigation as AdminSideNavigationComponent } from './AdminSideNavigation'
import { ListIcon, UserIcon } from 'components'

export default {
  title: 'Atoms/Navigation',
  component: AdminSideNavigationComponent
}

const Template = args => <AdminSideNavigationComponent {...args} />

export const AdminSideNavigation = Template.bind({})
AdminSideNavigation.args = {
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
