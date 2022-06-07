import React from 'react'
import { StatusTag } from 'examkrackers-components'

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
