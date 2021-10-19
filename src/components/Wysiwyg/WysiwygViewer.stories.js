import React from 'react'
import WysiwygViewer from './WysiwygViewer'

const Template = args => <WysiwygViewer {...args} />

export const Viewer = Template.bind({})
Viewer.args = {
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
        insert: ' dolor sit amet\n'
      }
    ]
  },
  getPhraseDetails: () => ({
    id: 'foo-123',
    phrase: 'ipsum',
    explanation: 'Lorem ipsum'
  }),
  glossaryEntries: [
    {
      id: 'foo-123',
      phrase: 'ipsum',
      explanation: 'Lorem ipsum'
    },
    {
      id: 'foo-456',
      phrase: 'dolor',
      explanation: 'Dolor sit amet'
    }
  ]
}

export default {
  title: 'Atoms/Wysiwyg',
  component: WysiwygViewer
}
