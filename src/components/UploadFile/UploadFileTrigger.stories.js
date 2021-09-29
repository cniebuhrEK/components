// UploadFile/UploadFile.stories.js - UploadFile story

import React from 'react'
import UploadFileTrigger from './UploadFileTrigger'
import Button from '../Button/Button'

const Template = args => (
  <UploadFileTrigger {...args}>
    <Button>Custom trigger</Button>
  </UploadFileTrigger>
)

export const UploadTrigger = Template.bind({})
UploadTrigger.args = {
  disabled: false,
  onChange: () => {},
  placeholder: 'Choose file to upload',
  id: 'file-id'
}

export default {
  title: 'Atoms/File',
  component: UploadFileTrigger
}
