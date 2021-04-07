import React from 'react';
import PropTypes from 'prop-types';

import {
  IconButton as IconButtonComponent,
  TrashIcon
} from 'components'

export const IconButton = props => {
  return (
    <IconButtonComponent {...props} />
  );
};

IconButton.propTypes = {
  icon: PropTypes.any
};

IconButton.defaultProps = {
  icon: <TrashIcon />,
  onClick: () => {}
};
