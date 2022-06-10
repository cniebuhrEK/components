import React from 'react'
import WysiwygViewer from './WysiwygViewer'

const Template = args => <WysiwygViewer {...args} />

export const Viewer = Template.bind({})
Viewer.args = {
  withHighlights: false,
  bookContentId: '70f994b8-c78b-4cd9-8b87-5214d3cd4f12',
  id: 'text-editor-container',
  value: {
    ops: [
      {
        insert: 'Lorem '
      },
      {
        attributes: {
          glossary: 'foo-123'
        },
        insert: 'ipsum'
      },
      {
        insert: ' dolor sit amet'
      },
      {
        attributes: {
          'a-highlights': true
        },
        insert: ' ipsum'
      }
    ]
  }
}

export default {
  title: 'Atoms/Wysiwyg',
  component: WysiwygViewer
}
