import React from 'react'
import Modal from './mock'

const Template = args => <Modal {...args}>{args.children}</Modal>

export const PlainModal = Template.bind({})
PlainModal.args = {
  children: 'Hello world!',
  title: 'EndExamModal title'
}

export default {
  title: 'Exam/Modal',
  component: Modal
}
