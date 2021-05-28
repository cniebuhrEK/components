import React from 'react'
import PropTypes from 'prop-types'

import { StudentSideNavigation as StudentSideNavigationComponent } from 'components'

export const StudentSideNavigation = props => {
  return <StudentSideNavigationComponent {...props} />
}

StudentSideNavigation.propTypes = {
  links: PropTypes.array
}

StudentSideNavigation.defaultProps = {
  links: []
}
