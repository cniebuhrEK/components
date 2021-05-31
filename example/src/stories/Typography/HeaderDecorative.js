import React from 'react'
import PropTypes from 'prop-types'

import { HeaderDecorative as HeaderDecorativeComponent } from 'components'

export const HeaderDecorative = props => {
  return <HeaderDecorativeComponent {...props} />
}

HeaderDecorative.propTypes = {
  children: PropTypes.string
}

HeaderDecorative.defaultProps = {
  children: 'Header decorative'
}
