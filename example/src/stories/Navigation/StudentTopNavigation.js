import React from 'react';
import PropTypes from 'prop-types';

import {
  StudentTopNavigation as StudentTopNavigationComponent
} from 'components'

export const StudentTopNavigation = props => {
  return (
    <StudentTopNavigationComponent {...props} />
  );
};

StudentTopNavigation.propTypes = {
  logo: PropTypes.any
};

StudentTopNavigation.defaultProps = {
  username: 'Hi, user@examkrackres.com',
  logoutName: 'Log out',
  handleLogout: () => {}
};
