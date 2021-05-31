import React from 'react'
import PropTypes from 'prop-types'

import { HeaderNormal as HeaderNormalComponent } from 'components'

export const HeaderNormal = props => {
  return <HeaderNormalComponent {...props} />
}

HeaderNormal.propTypes = {
  children: PropTypes.string
}

HeaderNormal.defaultProps = {
  children: 'Header Normal'
}
