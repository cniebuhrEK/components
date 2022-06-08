import React from 'react'
import { ArrowNav } from 'examkrackers-components'

const Template = args => <ArrowNav {...args} />

export const Default = Template.bind({})
Default.args = {
  text: 'Next Page',
  direction: 'right',
  onClick: () => console.log('Clicked!')
}

export default {
  title: 'Atoms/Arrow Navigation',
  component: ArrowNav
}
