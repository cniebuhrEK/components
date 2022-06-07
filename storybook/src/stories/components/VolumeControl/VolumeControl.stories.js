import React from 'react'
import { VolumeControl } from 'examkrackers-components'

const Template = props => <VolumeControl {...props} />

export const Default = Template.bind({})

Default.args = {}

export default {
  title: 'Atoms/VolumeControl',
  component: VolumeControl
}
