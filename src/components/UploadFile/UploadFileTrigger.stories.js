// UploadFile/UploadFile.stories.js - UploadFile story

import React from 'react'
import UploadFileTrigger from './UploadFileTrigger'

const Template = args => (
  <UploadFileTrigger {...args}>Custom trigger</UploadFileTrigger>
)

export const UploadTrigger = Template.bind({})
UploadTrigger.args = {
  disabled: false,
  onChange: () => {},
  placeholder: 'Choose file to upload',
  id: 'file-id',
  label: 'Label'
}

export default {
  title: 'Atoms/File',
  component: UploadFileTrigger
}
