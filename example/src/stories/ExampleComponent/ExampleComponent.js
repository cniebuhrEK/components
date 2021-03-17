import React from 'react';
import PropTypes from 'prop-types';

import { ExampleComponent } from 'components'

/**
 * Primary UI component for user interaction
 */
export const ExampleComponentUI = ({ text, ...props }) => {
  return (
    <ExampleComponent text={text} />
  );
};

ExampleComponentUI.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  text: PropTypes.string
};

ExampleComponentUI.defaultProps = {
  text: 'test'
};
