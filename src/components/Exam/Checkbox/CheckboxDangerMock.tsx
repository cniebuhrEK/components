// Exam/Checkbox/mock.tsx - Mock component

import React from 'react'
import CheckboxDanger from './CheckboxDanger'

interface CheckboxProps {
  name: string
  isSelected: boolean
  onChange: any
}

/**
 * Primary UI component for user interaction
 */
export const ExamCheckboxDanger = (props: CheckboxProps) => {
  const [checked, setIsChecked] = React.useState(props.isSelected)

  const onChange = (isChecked: boolean) => setIsChecked(isChecked)

  return (
    <>
      <CheckboxDanger {...props} isSelected={checked} onChange={onChange} />
    </>
  )
}

ExamCheckboxDanger.defaultProps = {
  name: 'question',
  isSelected: true,
  onChange: () => {}
}

export default ExamCheckboxDanger
