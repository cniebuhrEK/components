import React from 'react'
import BouncingLoader from './BouncingLoader'

const Template = args => <BouncingLoader {...args} />

export const Default = Template.bind({})

export default {
  title: 'Atoms/BouncingLoader',
  component: BouncingLoader
}
