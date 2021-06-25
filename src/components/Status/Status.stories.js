// Status/Status.stories.js - Status story

import React from 'react'
import Status from './Status'

const Template = args => <Status {...args} />

export const StatusSeverity = Template.bind({})
StatusSeverity.args = {
  success: false,
  warning: false,
  error: false,
  disabled: false,
  status: 'Active'
}

export default {
  title: 'Atoms/Status',
  component: Status
}
