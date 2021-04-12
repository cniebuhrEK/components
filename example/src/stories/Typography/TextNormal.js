import React from 'react';
import PropTypes from 'prop-types';

import { TextNormal as TextNormalComponent } from 'components'

export const TextNormal = props => {
  return (
    <TextNormalComponent {...props} />
  );
};

TextNormal.propTypes = {
  children: PropTypes.string,
  size: PropTypes.oneOf(['xs', 's', 'm'])
};

TextNormal.defaultProps = {
  children: 'Text normal'
};
