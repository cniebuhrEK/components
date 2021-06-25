import React from 'react'
import TimeEndWarning from './TimeEndWarning'

const Template = args => <TimeEndWarning {...args} />

export const TimeEnd = Template.bind({})
TimeEnd.args = {
  minLeft: 30
}

export default {
  title: 'Exam/Modal',
  component: TimeEndWarning
}
