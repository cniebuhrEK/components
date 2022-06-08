import React from 'react'
import { SingleSelectCreatableField as SingleSelectCreatable } from 'examkrackers-components'

const Template = args => (
  <div style={{ marginBottom: '100px', maxWidth: '512px' }}>
    <SingleSelectCreatable {...args} />
  </div>
)

export const SingleSelectCreatableField = Template.bind({})
SingleSelectCreatableField.args = {
  options: [
    { label: 'Option 1', value: 'option-1' },
    { label: 'Option 2', value: 'option-2' },
    { label: 'Option 3', value: 'option-3' }
  ],
  name: 'test',
  id: 'test',
  type: 'text',
  onChange: (name, value) => {},
  validate: (name, validationFunc) => {},
  label: 'Test',
  value: '',
  required: true,
  disabled: false,
  reset: false,
  t: (key, options) => {}
}

export default {
  title: 'Form elements/SingleSelectCreatable',
  component: SingleSelectCreatable
}
