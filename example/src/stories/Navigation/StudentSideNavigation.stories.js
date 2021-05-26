import React from 'react'

import { StudentSideNavigation as StudentSideNavigationComponent } from './StudentSideNavigation'
import { UserIcon } from 'components'

export default {
  title: 'Atoms/Navigation',
  component: StudentSideNavigationComponent
}

const Template = args => <StudentSideNavigationComponent {...args} />

export const StudentSideNavigation = Template.bind({})
StudentSideNavigation.args = {
  links: [
    {
      name: 'Testing',
      href: 'https://www.examkrackers.com',
      isActive: true,
      icon: <UserIcon />,
      id: 'nav-testing'
    },
    {
      name: 'Account',
      href: 'https://www.examkrackers.com',
      isActive: false,
      icon: <UserIcon />,
      id: 'nav-account'
    },
    {
      name: 'Manuals',
      href: 'https://www.examkrackers.com',
      isActive: false,
      icon: <UserIcon />,
      id: 'nav-manuals'
    },
    {
      name: 'F-Cards',
      href: 'https://www.examkrackers.com',
      isActive: false,
      icon: <UserIcon />,
      id: 'nav-f-cards'
    },
    {
      name: 'Video',
      href: 'https://www.examkrackers.com',
      isActive: false,
      icon: <UserIcon />,
      id: 'nav-video'
    }
  ]
}
