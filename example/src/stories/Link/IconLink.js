import React from 'react'
import PropTypes from 'prop-types'

import { IconLink as IconLinkComponent, UsersIcon } from 'components'

export const IconLink = props => {
  return <IconLinkComponent {...props} icon={<UsersIcon />} />
}

IconLink.propTypes = {
  isActive: PropTypes.bool,
  light: PropTypes.bool,
  disabled: PropTypes.bool,
  name: PropTypes.string,
  icon: PropTypes.node
}

IconLink.defaultProps = {
  isActive: false,
  disabled: false,
  light: false,
  name: 'Log out'
}
