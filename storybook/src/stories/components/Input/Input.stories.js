import React from 'react'
import styled from 'styled-components'
import { Input } from 'examkrackers-components'

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
  size: 'normal',
  disabled: false,
  error: false,
  errorText: ''
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
