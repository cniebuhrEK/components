import React from 'react';
import PropTypes from 'prop-types';

import { Link as LinkComponent } from 'components'

export const Link = props => {
  return (
    <LinkComponent {...props} />
  );
};

Link.propTypes = {
  isActive: PropTypes.bool,
  disabled: PropTypes.bool,
  name: PropTypes.string
};

Link.defaultProps = {
  isActive: false,
  name: 'Forgot password?'
};
