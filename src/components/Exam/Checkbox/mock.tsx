// Exam/Checkbox/mock.tsx - Mock component

import React from 'react'
import Checkbox from './Checkbox'

interface CheckboxProps {
  name: string
  isSelected: boolean
  onChange: any
}

/**
 * Primary UI component for user interaction
 */
export const ExamCheckbox = (props: CheckboxProps) => {
  const [checked, setIsChecked] = React.useState(props.isSelected)

  const onChange = (isChecked: boolean) => setIsChecked(isChecked)

  return (
    <>
      <Checkbox {...props} isSelected={checked} onChange={onChange} />
    </>
  )
}

ExamCheckbox.defaultProps = {
  name: 'question',
  isSelected: true,
  onChange: () => {}
}

export default ExamCheckbox
