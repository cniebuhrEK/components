import React from 'react'
import { ExamHeader as Component } from 'examkrackers-components'

const Template = args => <Component {...args} />

export const ExamHeader = Template.bind({})
ExamHeader.args = {
  title: 'Exam title',
  timer: '1:37',
  currentPage: 1,
  totalPages: 59,
  timerVisibility: true,
  pagesVisibility: true
}

export default {
  title: 'Exam/Header',
  component: Component
}
