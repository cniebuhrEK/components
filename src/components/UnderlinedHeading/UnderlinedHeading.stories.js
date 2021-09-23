// UnderlinedHeading/UnderlinedHeading.stories.js - UnderlinedHeading story

import React from 'react'
import UnderlinedHeadingComponent from './UnderlinedHeading'

const Template = args => (
  <UnderlinedHeadingComponent>{args.children}</UnderlinedHeadingComponent>
)

export const UnderlinedHeading = Template.bind({})
UnderlinedHeading.args = {
  children: 'ExamKrackers-MCAT-Manuals-Biology-Chapter 1- Chapter Title'
}

export default {
  title: 'Atoms/UnderlinedHeading',
  component: UnderlinedHeadingComponent
}
