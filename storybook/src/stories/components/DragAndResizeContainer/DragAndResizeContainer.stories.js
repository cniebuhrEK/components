import React from 'react'
import { DragAndResizeContainer } from 'examkrackers-components'

const Template = args => <DragAndResizeContainer {...args} />

export const Default = Template.bind({})
Default.args = {
  id: 'drag-and-resize',
  initWidth: 365,
  initHeight: 211,
  onResize: () => {},
  handleClose: () => {}
}

export default {
  title: 'Atoms/DragAndResizeContainer',
  component: DragAndResizeContainer
}
