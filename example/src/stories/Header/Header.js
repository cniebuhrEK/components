import React from 'react';
import PropTypes from 'prop-types';

import { Header as HeaderComponent } from 'components'

export const Header = props => {
  return (
    <HeaderComponent {...props} />
  );
};

Header.propTypes = {
  children: PropTypes.string
};

Header.defaultProps = {
  children: 'Admin dashboard'
};
