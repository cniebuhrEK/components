// AssigmentTag.stories.js - AssigmentTag story

import React from 'react'
import AssigmentTag from './AssigmentTag'

const DefaultTemplate = args => <AssigmentTag>{args.children}</AssigmentTag>

export const Default = DefaultTemplate.bind({})
Default.args = {
  children: 'example@mail.tag'
}

export default {
  title: 'Atoms/AssigmentTag',
  component: AssigmentTag
}
