import React from 'react'

import { Modal } from './Modal'

export default {
  title: 'Atoms/Modal',
  component: Modal
}

const Template = args => <Modal {...args}>{args.children}</Modal>

export const PlainModal = Template.bind({})
PlainModal.args = {
  children: 'Hello world!',
  title: 'EndExamModal title'
}
