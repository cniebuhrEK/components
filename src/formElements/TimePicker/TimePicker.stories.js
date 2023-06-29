import React from 'react'
import TimePicker from './TimePicker'

const TimePickerContainer = props => {
  const [newDate, setNewDate] = React.useState(props.value)

  function handleSetNewDate(name, date) {
    setNewDate(date)
  }

  return <TimePicker {...props} value={newDate} onChange={handleSetNewDate} />
}

const Template = args => <TimePickerContainer {...args} />

export const Basic = Template.bind({})
Basic.args = {
  id: 'test',
  value: new Date(),
  required: false,
  onChange: date => {},
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
  title: 'Form Elements/TimePicker',
  component: TimePicker
}
