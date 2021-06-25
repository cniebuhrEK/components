// Exam/Collapse.stories.js - Collapse story

import React from 'react'
import Collapse from './Collapse'

const Template = args => <Collapse {...args} />

export const ExamCollapse = Template.bind({})
ExamCollapse.args = {
  header: 'Instructions',
  content:
    'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum Lorem ipsum lorem ipsum lorem ipsum lorem ipsumLorem ipsum lorem ipsum lorem ipsum lorem ipsumLorem ipsum lorem ipsum lorem ipsum lorem ipsum'
}

export default {
  title: 'Exam/Collapse',
  component: Collapse
}
