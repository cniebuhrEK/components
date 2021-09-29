import React from 'react'
import Animation from './Animation'
import example from './example.json'

const Template = args => <Animation {...args} />

export const Default = Template.bind({})
Default.args = {
  data: example
}

export default {
  title: 'Atoms/Animation',
  component: Animation
}
