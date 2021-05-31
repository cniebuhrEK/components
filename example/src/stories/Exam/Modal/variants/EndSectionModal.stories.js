import React from 'react'

import { EndSectionModal } from './EndSectionModal'

export default {
  title: 'Exam/Modal',
  component: EndSectionModal
}

const Template = args => <EndSectionModal {...args} />

export const EndSection = Template.bind({})
EndSection.args = {
  incomplete: 12
}
