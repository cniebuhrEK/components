// Loader/Loader.stories.js - Loader story

import React from 'react'
import Loader from './Loader'

const Template = args => <Loader {...args} />

export const Primary = Template.bind({})
Primary.args = {
  size: 4
}

export default {
  title: 'Atoms/Loader',
  component: Loader
}
