// DatePicker/DatePicker.stories.js - DatePicker story

import React from 'react'
import DatePicker from './DatePicker'

const DatePickerContainer = props => {
  const [newDate, setNewDate] = React.useState(props.value)

  function handleSetNewDate(date) {
    setNewDate(date)
    console.log(date)
  }

  return <DatePicker {...props} value={newDate} onChange={handleSetNewDate} />
}

const Template = args => <DatePickerContainer {...args} />

export const Basic = Template.bind({})
Basic.args = {
  allowPast: false,
  value: new Date(),
  required: false,
  onChange: date => console.log(date)
}

export default {
  title: 'Form Elements/DatePicker',
  component: DatePicker
}
