import React from 'react';

import { StudentSideNavigation as StudentSideNavigationComponent } from './StudentSideNavigation';
import { UserIcon } from 'components'

export default {
  title: 'Atoms/Navigation',
  component: StudentSideNavigationComponent
};

const Template = (args) =>
  <StudentSideNavigationComponent {...args} />;

export const StudentSideNavigation = Template.bind({});
StudentSideNavigation.args = {
  links: [
    {
      name: 'Testing',
      onClick: () => {},
      isActive: true,
      icon: <UserIcon />,
      id: 'nav-testing'
    },
    {
      name: 'Account',
      onClick: () => {},
      isActive: false,
      icon: <UserIcon />,
      id: 'nav-account'
    },
    {
      name: 'Manuals',
      onClick: () => {},
      isActive: false,
      icon: <UserIcon />,
      id: 'nav-manuals'
    },
    {
      name: 'F-Cards',
      onClick: () => {},
      isActive: false,
      icon: <UserIcon />,
      id: 'nav-f-cards'
    },
    {
      name: 'Video',
      onClick: () => {},
      isActive: false,
      icon: <UserIcon />,
      id: 'nav-video'
    }
  ]
};
