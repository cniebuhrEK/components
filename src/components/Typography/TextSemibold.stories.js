import React from 'react'
import TextSemiboldComponent from './TextSemibold'

const Template = args => <TextSemiboldComponent {...args} />

export const TextSemibold = Template.bind({})
TextSemibold.args = {
  children: 'Text semibold',
  size: 'm'
}

export default {
  title: 'Typography/Text',
  component: TextSemiboldComponent
}
