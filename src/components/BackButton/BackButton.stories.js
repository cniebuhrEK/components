import React from 'react'
import BackButton from './BackButton'

const DefaultTemplate = args => (
  <BackButton {...args}>{args.children}</BackButton>
)

export const Default = DefaultTemplate.bind({})
Default.args = {
  onClick: () => {},
  children: 'Back to list'
}

export default {
  title: 'Atoms/BackButton',
  component: BackButton
}
