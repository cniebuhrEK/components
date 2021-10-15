// Textarea/Textarea.stories.js - Textarea story

import React from 'react'
import styled from 'styled-components'
import Textarea from './Textarea'

const Container = styled.div`
  max-width: 256px;
`

const Template = args => (
  <Container>
    <Textarea {...args} />
  </Container>
)

export const Default = Template.bind({})

Default.args = {
  type: 'text',
  label: 'Textarea',
  maxHeight: '100px'
}

export default {
  title: 'Atoms/Textarea',
  component: Textarea
}
