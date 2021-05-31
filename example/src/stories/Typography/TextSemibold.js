import React from 'react'
import PropTypes from 'prop-types'

import { TextSemibold as TextSemiboldComponent } from 'components'

export const TextSemibold = props => {
  return <TextSemiboldComponent {...props} />
}

TextSemibold.propTypes = {
  children: PropTypes.string,
  size: PropTypes.oneOf(['xs', 's', 'm'])
}

TextSemibold.defaultProps = {
  children: 'Text semibold'
}
