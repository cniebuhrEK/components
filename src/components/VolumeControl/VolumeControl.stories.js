import React from 'react'
import VolumeControl from './VolumeControl'

const Template = props => <VolumeControl {...props} />

export const Default = Template.bind({})

Default.args = {}

export default {
  title: 'Atoms/VolumeControl',
  component: VolumeControl
}
