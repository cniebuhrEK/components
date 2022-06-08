// Status/Status.stories.js - Status story

import React from 'react'
import StatusTag from './StatusTag'

const Template = args => <StatusTag {...args} />

export const StatusSeverity = Template.bind({})
StatusSeverity.args = {
  color: 'green',
  text: 'Completed'
}

export default {
  title: 'Atoms/StatusTag',
  component: StatusTag
}
