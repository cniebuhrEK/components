import React from 'react'
import ResponseRequiredModal from './mock'

const Template = args => <ResponseRequiredModal {...args} />

export const ResponseRequired = Template.bind({})
ResponseRequired.args = {}

export default {
  title: 'Exam/Modal',
  component: ResponseRequiredModal
}
