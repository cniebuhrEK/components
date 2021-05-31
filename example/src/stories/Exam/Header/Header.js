import React from 'react'
import PropTypes from 'prop-types'

import { ExamHeader as HeaderComponent } from 'components'

/**
 * Primary UI component for user interaction
 */
export const Header = props => {
  return (
    <>
      <HeaderComponent {...props} />
    </>
  )
}

Header.propTypes = {
  title: PropTypes.string,
  timer: PropTypes.any,
  currentPage: PropTypes.number,
  totalPages: PropTypes.number,
  timerVisibility: PropTypes.bool,
  pagesVisibility: PropTypes.bool
}

Header.defaultProps = {
  title: 'Exam title',
  timer: '1:37',
  currentPage: 1,
  totalPages: 59,
  timerVisibility: true,
  pagesVisibility: true
}
