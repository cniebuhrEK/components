import React from 'react'
import { Animation } from 'examkrackers-components'
import example from './example.json'

const Template = args => (
  <div style={{ maxWidth: '500px' }}>
    <Animation {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  data: example,
  hideControls: false,
  autoplay: false,
  loop: false
}

export default {
  title: 'Atoms/Animation',
  component: Animation
}
