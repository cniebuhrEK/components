import React from 'react'
import TestDayCertificationExpireModal from './mock'

const Template = args => <TestDayCertificationExpireModal {...args} />

export const TestDayCertificationExpire = Template.bind({})
TestDayCertificationExpire.args = {}

export default {
  title: 'Exam/Modal',
  component: TestDayCertificationExpireModal
}
