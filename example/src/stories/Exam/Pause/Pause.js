import React from 'react'
import PropTypes from 'prop-types'

import { PauseExam as PauseExamComponent } from 'components'

/**
 * Primary UI component for user interaction
 */
export const PauseExam = props => {
  return (
    <>
      <PauseExamComponent {...props} />
    </>
  )
}

PauseExam.propTypes = {
  handlePause: PropTypes.func
}

PauseExam.defaultProps = {
  handlePause: e => {}
}
