import React from 'react'
import PropTypes from 'prop-types'

import { SubheaderNormal as SubheaderNormalComponent } from 'components'

export const SubheaderNormal = props => {
  return <SubheaderNormalComponent {...props} />
}

SubheaderNormal.propTypes = {
  children: PropTypes.string
}

SubheaderNormal.defaultProps = {
  children: 'Subheader Normal'
}
