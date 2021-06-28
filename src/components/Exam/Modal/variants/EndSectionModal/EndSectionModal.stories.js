import React from 'react'
import EndSectionModal from './mock'

const Template = args => <EndSectionModal {...args} />

export const EndSection = Template.bind({})
EndSection.args = {
  incomplete: 12
}

export default {
  title: 'Exam/Modal',
  component: EndSectionModal
}
