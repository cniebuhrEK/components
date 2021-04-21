import React from 'react';
import PropTypes from 'prop-types';

import { MediaControl as MediaControlComponent } from 'components'

export const MediaControl = props => {
  return (
    <MediaControlComponent {...props} />
  );
};

MediaControl.propTypes = {
  play: PropTypes.bool,
  pause: PropTypes.bool,
  stop: PropTypes.bool,
  disabled: PropTypes.bool,
  text: PropTypes.string
};

MediaControl.defaultProps = {
  play: false,
  pause: false,
  stop: false,
  disabled: false,
  text: 'EK-1'
};
