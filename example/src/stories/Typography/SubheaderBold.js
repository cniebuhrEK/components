import React from 'react'
import PropTypes from 'prop-types'

import { SubheaderBold as SubheaderBoldComponent } from 'components'

export const SubheaderBold = props => {
  return <SubheaderBoldComponent {...props} />
}

SubheaderBold.propTypes = {
  children: PropTypes.string
}

SubheaderBold.defaultProps = {
  children: 'Header Normal'
}
