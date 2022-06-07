import React from 'react'
import { Link } from 'examkrackers-components'

const Template = args => <Link {...args} />

export const Default = Template.bind({})
Default.args = {
  isActive: false,
  name: 'Forgot password?'
}

export default {
  title: 'Atoms/Link',
  component: Link
}
