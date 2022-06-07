import React from 'react'
import { UploadFile } from 'examkrackers-components'

const Template = args => <UploadFile {...args} />

export const Default = Template.bind({})
Default.args = {
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
