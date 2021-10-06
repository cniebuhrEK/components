import React from 'react'
import KrackUModal from './KrackU'
import { Heading1, Text } from '../../Typography'

const Template = args => (
  <KrackUModal {...args}>
    <Heading1 bold>KrackU Modal</Heading1>
    <Text size='s'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus turpis
      mi, egestas in tortor id, fringilla elementum tellus.
    </Text>
  </KrackUModal>
)

export const Default = Template.bind({})
Default.args = {
  width: 512,
  height: 320,
  isStatic: false,
  open: true
}

export default {
  title: 'KrackU/Modal',
  component: KrackUModal
}
