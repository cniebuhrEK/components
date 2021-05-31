import React from 'react'
import PropTypes from 'prop-types'

import {
  AdminSideNavigation as AdminSideNavigationComponent,
  UserIcon,
  ListIcon,
  StudentIcon
} from 'components'

export const AdminSideNavigation = props => {
  return <AdminSideNavigationComponent {...props} />
}

AdminSideNavigation.propTypes = {
  links: PropTypes.array
}

AdminSideNavigation.defaultProps = {
  links: [
    {
      name: 'Admins Manager',
      onClick: () => {},
      isActive: true,
      icon: <UserIcon />,
      id: 'admins-manager'
    },
    {
      name: 'Exam Editor',
      onClick: () => {},
      isActive: false,
      icon: <ListIcon />,
      id: 'exam-editor'
    },
    {
      name: 'Students list',
      onClick: () => {},
      isActive: false,
      icon: <StudentIcon />,
      id: 'students-list'
    }
  ]
}
