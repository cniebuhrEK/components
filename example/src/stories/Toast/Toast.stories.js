import React from 'react'

import { Toast } from './Toast'

export default {
  title: 'Atoms/Toast',
  component: Toast
}

const Template = args => <Toast {...args}>{args.children}</Toast>

export const ToastNotification = Template.bind({})
ToastNotification.args = {
  children: 'Hello world!',
  severity: 'info'
}
