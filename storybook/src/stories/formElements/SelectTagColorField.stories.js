import React, { useState } from 'react'
import { SelectTagColorField as SelectTagColor } from 'examkrackers-components'

const Template = args => {
  const [selectedColor, setSelectedColor] = useState(null)

  const handleChange = (name, value) => {
    setSelectedColor(value)
  }

  return (
    <SelectTagColor {...args} value={selectedColor} onChange={handleChange} />
  )
}

export const UploadFileField = Template.bind({})
UploadFileField.args = {
  name: 'test',
  id: 'test',
  type: 'text',
  validate: (name, validationFunc) => {},
  label: 'Pick a color',
  required: true,
  disabled: false,
  reset: false,
  t: (key, options) => {}
}

export default {
  title: 'Form elements/SelectTagColor',
  component: SelectTagColor
}
