import React from 'react'

import { TimeExpiredModal } from './TimeExpiredModal'

export default {
  title: 'Exam/Modal',
  component: TimeExpiredModal
}

const Template = args => <TimeExpiredModal {...args} />

export const TimeExpired = Template.bind({})
TimeExpired.args = {
  handleConfirm: () => console.log('confirm')
}
