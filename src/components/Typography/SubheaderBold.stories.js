import React from 'react'
import SubheaderBoldComponent from './SubheaderBold'

const Template = args => <SubheaderBoldComponent {...args} />

export const SubheaderBold = Template.bind({})
SubheaderBold.args = {
  children: 'Subheader Bold'
}

export default {
  title: 'Typography/Subheader',
  component: SubheaderBoldComponent
}
