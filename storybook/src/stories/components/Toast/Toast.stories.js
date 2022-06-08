import React from 'react'
import { Toast } from 'examkrackers-components'

const Template = args => <Toast {...args}>{args.children}</Toast>

export const ToastNotification = Template.bind({})
ToastNotification.args = {
  open: true,
  handleClose: () => {},
  children: 'Hello world!',
  severity: 'info'
}

export default {
  title: 'Atoms/Toast',
  component: Toast
}
