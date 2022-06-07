import React from 'react'
import { ExamCheckbox as Component, ExamCheckboxDanger as ComponentDanger } from 'examkrackers-components'

const Template = args => {
  const [checked, setIsChecked] = React.useState(args.isSelected)
  const onChange = (isChecked) => setIsChecked(isChecked)

  return (
    <>
      <Component {...args} isSelected={checked} onChange={onChange} />
    </>
  )
}

const CheckboxDangerTemplate = args => {
  const [checked, setIsChecked] = React.useState(args.isSelected)
  const onChange = (isChecked) => setIsChecked(isChecked)

  return (
    <>
      <ComponentDanger {...args} isSelected={checked} onChange={onChange} />
    </>
  )
}

export const ExamCheckbox = Template.bind({})
ExamCheckbox.args = {
  name: 'question',
  isSelected: true,
  onChange: () => {}
}

export const ExamCheckboxDanger = CheckboxDangerTemplate.bind({})
ExamCheckboxDanger.args = {
  label: 'Label',
  name: 'question',
  isSelected: true,
  onChange: () => {}
}

export default {
  title: 'Exam/Checkbox',
  component: Component
}
