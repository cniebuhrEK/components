import React from 'react'
import PropTypes from 'prop-types'

import { ExamCollapse as ExamCollapseComponent } from 'components'

/**
 * Primary UI component for user interaction
 */
export const ExamCollapse = props => {
  return (
    <>
      <ExamCollapseComponent {...props} />
    </>
  )
}

ExamCollapse.propTypes = {
  header: PropTypes.string,
  content: PropTypes.string
}

ExamCollapse.defaultProps = {
  header: 'Instructions',
  content:
    'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum Lorem ipsum lorem ipsum lorem ipsum lorem ipsumLorem ipsum lorem ipsum lorem ipsum lorem ipsumLorem ipsum lorem ipsum lorem ipsum lorem ipsum'
}
