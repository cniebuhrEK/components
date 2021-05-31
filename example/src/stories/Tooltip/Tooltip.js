import React from 'react'
import PropTypes from 'prop-types'

import { Tooltip as TooltipComponent } from 'components'

export const Tooltip = props => {
  return <TooltipComponent {...props} />
}

Tooltip.propTypes = {
  children: PropTypes.string,
  tooltipContent: PropTypes.string,
  id: PropTypes.string
}

Tooltip.defaultProps = {
  children: 'Hover over here to see the tooltip',
  id: 'tooltip-example',
  tooltipContent: 'Hello world!'
}
