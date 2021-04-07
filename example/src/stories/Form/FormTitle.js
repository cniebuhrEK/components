import React from 'react';
import PropTypes from 'prop-types';

import { FormTitle as FormTitleComponent } from 'components'

export const FormTitle = props => {
  return (
    <FormTitleComponent {...props} />
  );
};

FormTitle.propTypes = {
  children: PropTypes.string
};

FormTitle.defaultProps = {
  children: 'Log in'
};
