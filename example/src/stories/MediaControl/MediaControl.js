import React from 'react'
import PropTypes from 'prop-types'

import { MediaControl as MediaControlComponent } from 'components'

export const MediaControl = props => {
  return <MediaControlComponent {...props} />
}

MediaControl.propTypes = {
  play: PropTypes.bool,
  pause: PropTypes.bool,
  tickmark: PropTypes.bool,
  plus: PropTypes.bool,
  text: PropTypes.string
}

MediaControl.defaultProps = {
  play: false,
  pause: false,
  tickmark: false,
  plus: false,
  text: 'EK-1'
}
