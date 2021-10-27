// Modal/Modal.stories.js - Modal story

import React from 'react'
import Modal from './Modal'

const Template = args => <Modal {...args}>{args.children}</Modal>

export const PlainModal = Template.bind({})
PlainModal.args = {
  children: 'Hello world!',
  title: 'Plain modal title',
  open: true
}

export default {
  title: 'Atoms/Modal',
  component: Modal
}
