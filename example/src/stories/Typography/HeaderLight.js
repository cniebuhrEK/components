import React from 'react'
import PropTypes from 'prop-types'

import { HeaderLight as HeaderLightComponent } from 'components'

export const HeaderLight = props => {
  return <HeaderLightComponent {...props} />
}

HeaderLight.propTypes = {
  children: PropTypes.string
}

HeaderLight.defaultProps = {
  children: 'Header Light'
}
