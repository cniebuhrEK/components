import React from 'react'
import { Loader } from 'examkrackers-components'

const Template = args => <Loader {...args} />

export const Primary = Template.bind({})
Primary.args = {
  size: 4
}

export default {
  title: 'Atoms/Loader',
  component: Loader
}
