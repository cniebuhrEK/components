import React from 'react'
import EndExamModal from './mock'

const Template = args => <EndExamModal {...args} />

export const EndExam = Template.bind({})
EndExam.args = {}

export default {
  title: 'Exam/Modal',
  component: EndExamModal
}
