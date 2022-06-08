import React from 'react'
import { Checkbox } from 'examkrackers-components'

const Template = args => {
  const [checked, setIsChecked] = React.useState(args.isSelected)
  const onChange = (isChecked) => setIsChecked(isChecked)

  return (
    <Checkbox {...args} isSelected={checked} onChange={onChange} />
  )
}

export const Default = Template.bind({})
Default.args = {
  name: 'question',
  isSelected: true,
  intersection: false,
  onChange: () => {}
}

export default {
  title: 'Atoms/Checkbox',
  component: Checkbox
}
