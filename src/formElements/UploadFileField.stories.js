import React from 'react'
import UploadFile from './UploadFileField'

const Template = args => <UploadFile {...args} />

export const UploadFileField = Template.bind({})
UploadFileField.args = {
  name: 'test',
  id: 'test',
  type: 'text',
  onChange: (name, file) => {},
  validate: (name, validationFunc) => {},
  label: 'Test',
  value: '',
  required: true,
  disabled: false,
  reset: false,
  t: (key, options) => {}
}

export default {
  title: 'Form elements/UploadFileField',
  component: UploadFile
}
