import React from 'react'
import Modal from './DraggableResizable'
import { Heading1, Text } from '../../../Typography'

const Template = args => (
  <Modal {...args}>
    <Heading1 bold>KrackU Modal</Heading1>
    <Text size='s'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus turpis
      mi, egestas in tortor id, fringilla elementum tellus.
    </Text>
  </Modal>
)

export const DraggableResizableModal = Template.bind({})
DraggableResizableModal.args = {
  width: 512,
  height: 320,
  isStatic: false,
  open: true
}

export default {
  title: 'Atoms/Modal',
  component: Modal
}
