// UploadFile/UploadFile.stories.js - UploadFile story

import React from 'react'
import UploadFile from './UploadFile'

const Template = args => <UploadFile {...args} />

export const Upload = Template.bind({})
Upload.args = {
  disabled: false,
  onChange: () => {},
  reset: false,
  placeholder: 'Choose file to upload',
  id: 'file-id',
  label: 'Label',
  required: false,
  error: false,
  errorText: 'required field'
}

export default {
  title: 'Atoms/File',
  component: UploadFile
}
