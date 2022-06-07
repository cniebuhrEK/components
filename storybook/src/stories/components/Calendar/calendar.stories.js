// Calendar/Calendar.stories.js - Calendar story

import React from 'react'
import { Calendar } from 'examkrackers-components'

const Template = args => (
  <Calendar id='calendar' {...args}>
    Open
  </Calendar>
)

export const Basic = Template.bind({})
Basic.args = {}

export default {
  title: 'atoms/Calendar',
  component: Calendar
}
