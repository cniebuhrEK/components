// Tag/Tag.stories.js - Tag story

import React from 'react'
import Tag from './Tag'

const DefaultTemplate = args => <Tag {...args} />

export const Default = DefaultTemplate.bind({})

Default.args = {
  color: 'orange',
  text: 'text',
  isStatic: false,
  isActive: false,
  id: 'tag-ig',
  name: 'tag-name',
  uppercase: true
}

export default {
  title: 'Atoms/Tag',
  component: Tag
}
