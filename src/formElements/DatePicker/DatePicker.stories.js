// DatePicker/DatePicker.stories.js - DatePicker story

import React from 'react'
import DatePicker from './DatePicker'

const DatePickerContainer = props => {
  const [newDate, setNewDate] = React.useState(props.value)

  function handleSetNewDate(name, date) {
    setNewDate(date)
    console.log(date)
  }

  return <DatePicker {...props} value={newDate} onChange={handleSetNewDate} />
}

const Template = args => <DatePickerContainer {...args} />

export const Basic = Template.bind({})
Basic.args = {
  id: 'test',
  allowPast: false,
  value: new Date(),
  required: false,
  onChange: date => console.log(date),
  name: 'test',
  type: 'text',
  validate: (name, validationFunc) => {},
  label: 'Test',
  disabled: false,
  reset: false,
  size: 'normal',
  t: (key, options) => {}
}

export default {
  title: 'Form Elements/DatePicker',
  component: DatePicker
}
