// Input/Input.stories.js - Input story

import React from 'react'
import styled from 'styled-components'
import Input from './Input'

const Container = styled.div`
  max-width: 256px;
`

const Template = args => (
  <Container>
    <Input {...args} />
  </Container>
)

export const Default = Template.bind({})
export const Password = Template.bind({})
export const Search = Template.bind({})

Default.args = {
  type: 'text',
  label: 'Input',
  size: 'normal'
}

Password.args = {
  type: 'password',
  label: 'Input'
}

Search.args = {
  type: 'search',
  placeholder: 'Search anything...'
}

export default {
  title: 'Atoms/Input',
  component: Input
}
