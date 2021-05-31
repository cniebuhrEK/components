import React from 'react'
import PropTypes from 'prop-types'

import { Status as StatusComponent } from 'components'

export const Status = props => {
  return <StatusComponent {...props} />
}

Status.propTypes = {
  success: PropTypes.bool,
  warning: PropTypes.bool,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  status: PropTypes.string
}

Status.defaultProps = {
  success: false,
  warning: false,
  error: false,
  disabled: false,
  status: 'Active'
}
