import React from 'react'
import PropTypes from 'prop-types'

import { ExamBreakCountDown as ExamBreakCountDownComponent } from 'components'

/**
 * Primary UI component for user interaction
 */
export const ExamBreakCountDown = props => {
  return (
    <>
      <ExamBreakCountDownComponent {...props} />
    </>
  )
}

ExamBreakCountDown.propTypes = {
  handleResume: PropTypes.func,
  userName: PropTypes.string,
  examTitle: PropTypes.string,
  timeRemaining: PropTypes.string
}

ExamBreakCountDown.defaultProps = {
  handleResume: () => {},
  userName: 'Ann Brown',
  examTitle: 'EK-1',
  timeRemaining: '00:09:59'
}
