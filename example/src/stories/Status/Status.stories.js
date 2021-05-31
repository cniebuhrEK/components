import React from 'react'

import { Status as StatusComponent } from './Status'

export default {
  title: 'Atoms/Status',
  component: StatusComponent
}

const Template = args => <StatusComponent {...args} />

export const StatusSeverity = Template.bind({})
StatusSeverity.args = {
  success: false,
  warning: false,
  error: false,
  disabled: false,
  status: 'Active'
}
