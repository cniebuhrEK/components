import React from 'react'

import { UploadFile as UploadFileComponent } from './UploadFile'

export default {
  title: 'Atoms/File',
  component: UploadFileComponent
}

const Template = args => <UploadFileComponent {...args} />

export const UploadFile = Template.bind({})
UploadFile.args = {
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
