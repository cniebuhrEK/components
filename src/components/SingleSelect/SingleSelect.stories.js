// SingleSelect/SingleSelect.stories.js - SingleSelect story

import React from 'react'
import SingleSelect from './SingleSelect'

const Template = args => (
  <div style={{ maxWidth: '256px', marginBottom: '100px' }}>
    <SingleSelect {...args} />
  </div>
)

export const Basic = Template.bind({})
Basic.args = {
  error: false,
  errorText: '',
  label: 'Select',
  isSearchable: true,
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
