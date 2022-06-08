import React from 'react'
import { ExamCollapse as Component } from 'examkrackers-components'

const Template = args => <Component {...args} />

export const ExamCollapse = Template.bind({})
ExamCollapse.args = {
  header: 'Instructions',
  content:
    'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum Lorem ipsum lorem ipsum lorem ipsum lorem ipsumLorem ipsum lorem ipsum lorem ipsum lorem ipsumLorem ipsum lorem ipsum lorem ipsum lorem ipsum'
}

export default {
  title: 'Exam/Collapse',
  component: Component
}
