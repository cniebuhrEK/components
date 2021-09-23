import React from 'react'
import Animation from './Animation'
import data from './heartbeat.json'

const Template = args => <Animation {...args} />

export const Default = Template.bind({})
Default.args = {
  data: data,
  isPlaying: true,
  autoplay: true,
  loop: true,
  isPaused: false,
  width: 300,
  height: 300,
  speed: 1
}

export default {
  title: 'Atoms/Animation',
  component: Animation
}
