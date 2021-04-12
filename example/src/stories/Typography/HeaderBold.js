import React from 'react';
import PropTypes from 'prop-types';

import { HeaderBold as HeaderBoldComponent } from 'components'

export const HeaderBold = props => {
  return (
    <HeaderBoldComponent {...props} />
  );
};

HeaderBold.propTypes = {
  children: PropTypes.string
};

HeaderBold.defaultProps = {
  children: 'Header bold'
};
