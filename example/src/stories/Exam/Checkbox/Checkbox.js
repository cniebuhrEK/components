import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { ExamCheckbox as ExamCheckboxComponent } from 'components'

/**
 * Primary UI component for user interaction
 */
export const ExamCheckbox = props => {
  const [checked, setIsChecked] = useState(props.isSelected)

  const onChange = isChecked => setIsChecked(isChecked)

  return (
    <>
      <ExamCheckboxComponent
        {...props}
        isSelected={checked}
        onChange={onChange}
      />
    </>
  )
}

ExamCheckbox.propTypes = {
  name: PropTypes.string,
  isSelected: PropTypes.bool,
  onChange: PropTypes.func
}

ExamCheckbox.defaultProps = {
  name: 'question',
  isSelected: true,
  onChange: () => {}
}
