import React from 'react'
import Checkbox from './Checkbox'

interface CheckboxProps {
  name: string
  isSelected: boolean
  onChange: any
}

export const CheckboxMock = (props: CheckboxProps) => {
  const [checked, setIsChecked] = React.useState(props.isSelected)

  const onChange = (isChecked: boolean) => setIsChecked(isChecked)

  return (
    <>
      <Checkbox {...props} isSelected={checked} onChange={onChange} />
    </>
  )
}

CheckboxMock.defaultProps = {
  name: 'question',
  isSelected: true,
  onChange: () => {}
}
