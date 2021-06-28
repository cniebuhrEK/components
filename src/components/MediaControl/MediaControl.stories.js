// MediaControl/MediaControl.stories.js - MediaControl story

import React from 'react'
import MediaControl from './MediaControl'

const Template = args => <MediaControl {...args} />

export const MediaControlSeverity = Template.bind({})
MediaControlSeverity.args = {
  play: true,
  pause: false,
  tickmark: false,
  plus: false,
  status: 'EK-1'
}

export default {
  title: 'Atoms/MediaControl',
  component: MediaControl
}
