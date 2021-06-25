import React from 'react'
import TextNormalComponent from './TextNormal'

const Template = args => <TextNormalComponent {...args} />

export const TextNormal = Template.bind({})
TextNormal.args = {
  children: 'Text semibold',
  size: 'm'
}

export default {
  title: 'Typography/Text',
  component: TextNormalComponent
}
