import React from 'react'
import PropTypes from 'prop-types'

import { SubheaderLight as SubheaderLightComponent } from 'components'

export const SubheaderLight = props => {
  return <SubheaderLightComponent {...props} />
}

SubheaderLight.propTypes = {
  children: PropTypes.string
}

SubheaderLight.defaultProps = {
  children: 'Subheader Light'
}
