import React from 'react';
import PropTypes from 'prop-types';

import { Status as StatusComponent } from 'components'

export const Status = props => {
  return (
    <StatusComponent {...props} />
  );
};

Status.propTypes = {
  isActive: PropTypes.bool,
  activeStatus: PropTypes.string,
  inactiveStatus: PropTypes.string
};

Status.defaultProps = {
  isActive: false,
  activeStatus: 'Active',
  inactiveStatus: 'Inactive'
};
