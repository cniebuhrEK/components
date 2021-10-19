import React from 'react'
import WysiwygEditorField from './WysiwygEditorField'

const Template = args => <WysiwygEditorField {...args} />

export const UploadFileField = Template.bind({})
UploadFileField.args = {
  name: 'test',
  id: 'test-wysiwyg',
  type: 'text',
  onChange: (name, value) => {},
  validate: (name, validationFunc) => {},
  label: 'Test',
  initialValue: {
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
  required: true,
  t: (key, options) => {},
  formats: {
    size: true,
    header: true,
    direction: true,
    bold: true,
    italic: true,
    underline: true,
    strike: true,
    orderedList: true,
    bulletList: true,
    increaseIndent: true,
    decreaseIndent: true,
    align: true,
    scriptSuper: true,
    scriptSub: true,
    blockquote: true,
    formula: true,
    glossary: true,
    adminHighlights: true
  },
  handleFetchGlossaryList: query => console.log(query),
  glossaryEntriesPagination: {
    page: 1,
    take: 10,
    recordsTotal: 2,
    pagesTotal: 1
  },
  getPhraseDetails: async () => ({
    data: {
      id: 'foo-123',
      phrase: 'ipsum',
      explanation: 'Lorem ipsum'
    }
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
  title: 'Form elements/WysiwygEditorField',
  component: WysiwygEditorField
}
