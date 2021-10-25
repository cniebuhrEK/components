import React from 'react'
import NoIncompleteQuestionsModal from './mock'

const Template = args => <NoIncompleteQuestionsModal {...args} />

export const NoIncompleteQuestions = Template.bind({})
NoIncompleteQuestions.args = {}

export default {
  title: 'Exam/Modal',
  component: NoIncompleteQuestionsModal
}
