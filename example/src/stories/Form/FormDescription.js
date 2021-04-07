import React from 'react';
import PropTypes from 'prop-types';

import { FormDescription as FormDescriptionComponent } from 'components'

export const FormDescription = props => {
  return (
    <FormDescriptionComponent {...props} />
  );
};

FormDescription.propTypes = {
  children: PropTypes.string
};

FormDescription.defaultProps = {
  children: 'password recovery'
};
