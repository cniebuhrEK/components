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
        insert: 'ipsum'
      },
      {
        insert: ' dolor sit amet'
      },
      {
        insert: ' ipsum sit amet'
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
    adminHighlights: true,
    customImage: true
  },
  handleS3Upload: file => {
    const result = URL.createObjectURL(file)
    return {
      data: {
        url: result,
        data: 'data'
      }
    }
  },
  handleFetchGlossaryList: query => console.log(query),
  handleScanGlossaryList: async ({ raw, skipIds, query }) => {
    console.log({ raw, skipIds, query })
    return {
      data: {
        data: [
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
        ],
        meta: {
          page: 1,
          take: 5,
          recordsTotal: 3,
          pagesTotal: 1
        }
      }
    }
  },
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
