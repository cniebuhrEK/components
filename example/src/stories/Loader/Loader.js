import React from 'react'
import PropTypes from 'prop-types'

import { Loader as LoaderComponent } from 'components'

export const Loader = props => {
  return <LoaderComponent {...props} />
}

Loader.propTypes = {
  size: PropTypes.number
}

Loader.defaultProps = {
  size: 4
}
