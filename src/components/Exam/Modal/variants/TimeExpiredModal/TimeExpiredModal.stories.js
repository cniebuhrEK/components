import React from 'react'
import TimeExpiredModal from './mock'

const Template = args => <TimeExpiredModal {...args} />

export const TimeExpired = Template.bind({})
TimeExpired.args = {
  handleConfirm: () => console.log('confirm')
}

export default {
  title: 'Exam/Modal',
  component: TimeExpiredModal
}
