import React from 'react'
import SubheaderLightComponent from './SubheaderLight'

export default {
  title: 'Typography/Subheader',
  component: SubheaderLightComponent
}

const Template = args => <SubheaderLightComponent {...args} />

export const SubheaderLight = Template.bind({})
SubheaderLight.args = {
  children: 'Subheader Light'
}
