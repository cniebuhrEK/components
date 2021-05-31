import React from 'react'

import { SubheaderNormal as SubheaderNormalComponent } from './SubheaderNormal'

export default {
  title: 'Typography/Subheader',
  component: SubheaderNormalComponent
}

const Template = args => <SubheaderNormalComponent {...args} />

export const SubheaderNormal = Template.bind({})
SubheaderNormal.args = {
  children: 'Subheader Normal'
}
