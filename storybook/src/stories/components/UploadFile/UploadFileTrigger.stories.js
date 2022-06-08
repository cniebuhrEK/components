import React from 'react'
import { UploadFileTrigger, Button } from 'examkrackers-components'

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
