import React from 'react'
import { SingleSelect } from 'examkrackers-components'

const Template = args => (
  <div style={{ maxWidth: '256px', marginBottom: '100px' }}>
    <SingleSelect {...args} />
  </div>
)

export const Basic = Template.bind({})
Basic.args = {
  id: 'select-id',
  error: false,
  errorText: '',
  label: 'Select',
  isSearchable: true,
  isClearable: true,
  options: [
    { label: 'Option 1', value: 'option-1' },
    { label: 'Option 2', value: 'option-2' },
    { label: 'Option 3', value: 'option-3' }
  ],
  required: false,
  size: 'normal',
  disabled: false,
  onBlur: () => {},
  onFocus: () => {},
  onChange: () => {}
}

export default {
  title: 'Atoms/SingleSelect',
  component: SingleSelect
}
