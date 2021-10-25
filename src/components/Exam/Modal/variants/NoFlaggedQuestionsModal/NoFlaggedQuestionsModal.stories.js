import React from 'react'
import NoFlaggedQuestionsModal from './mock'

const Template = args => <NoFlaggedQuestionsModal {...args} />

export const NoFlaggedQuestions = Template.bind({})
NoFlaggedQuestions.args = {}

export default {
  title: 'Exam/Modal',
  component: NoFlaggedQuestionsModal
}
