import React from 'react';
import PropTypes from 'prop-types';

import {
  StudentSideNavigation as StudentSideNavigationComponent,
  UserIcon
} from 'components'

export const StudentSideNavigation = props => {
  return (
    <StudentSideNavigationComponent {...props} />
  );
};

StudentSideNavigation.propTypes = {
  links: PropTypes.array
};

StudentSideNavigation.defaultProps = {
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
