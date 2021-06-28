import React from 'react'
import SubheaderNormalComponent from './SubheaderNormal'

const Template = args => <SubheaderNormalComponent {...args} />

export const SubheaderNormal = Template.bind({})
SubheaderNormal.args = {
  children: 'Subheader Normal'
}

export default {
  title: 'Typography/Subheader',
  component: SubheaderNormalComponent
}
