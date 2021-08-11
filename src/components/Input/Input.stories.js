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

export const BasicInput = Template.bind({})
BasicInput.args = {
  type: 'text',
  label: 'Input'
}

export default {
  title: 'Atoms/Input',
  component: Input
}
