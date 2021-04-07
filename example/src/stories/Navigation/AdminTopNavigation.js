import React from 'react';
import PropTypes from 'prop-types';

import {
  AdminTopNavigation as AdminTopNavigationComponent
} from 'components'

export const AdminTopNavigation = props => {
  return (
    <AdminTopNavigationComponent {...props} />
  );
};

AdminTopNavigation.propTypes = {
  logo: PropTypes.any
};

AdminTopNavigation.defaultProps = {
  logo: 'Logo placeholder',
  username: 'Hi, user@examkrackres.com',
  logoutName: 'Log out',
  handleLogout: () => {}
};
