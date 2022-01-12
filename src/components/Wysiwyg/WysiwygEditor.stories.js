import React from 'react'
import WysiwygEditor from './WysiwygEditor'

const Template = args => <WysiwygEditor {...args} />

export const Default = Template.bind({})
Default.args = {
  bookContentId: '70f994b8-c78b-4cd9-8b87-5214d3cd4f12',
  disabled: false,
  label: 'Label',
  required: false,
  error: false,
  errorText: 'required field',
  id: 'text-editor-container',
  handleS3Upload: file => {
    const result = URL.createObjectURL(file)
    return {
      data: {
        url: result,
        data: 'data'
      }
    }
  },
  onChange: e => console.log(e),
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
    customImage: true,
    adminHighlights: true,
    fontColor: true
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
  getPhraseDetails: () => ({
    id: 'foo-123',
    phrase: 'ipsum',
    explanation: 'Lorem ipsum',
    occurances: [
      {
        id: '14aa2631-d164-4296-8017-0c45ff4c17eb',
        raw: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt culpa qui officia deserunt mollit anim est laborum.',
        delta_object:
          '{"ops":[{"insert":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo "},{"attributes":{"glossary":"53671de8-2ae8-4691-9619-13c4296c83fa"},"insert":"consequat"},{"insert":". Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in "},{"attributes":{"glossary":"4e5d2f64-768e-4362-8169-c5acbb0e6aa4"},"insert":"culpa"},{"insert":" qui officia deserunt mollit anim id est laborum.\\n"}]}',
        type: 'book_content',
        book_title: 'Physics',
        book_tag: null,
        book_tag_colour: null,
        chapter_order: 1,
        part: 1,
        subchapter_order: 1,
        subchapter_title: 'Edited Section 1',
        content_order: 4,
        resource_order: null,
        book_id: '123'
      },
      {
        id: '70f994b8-c78b-4cd9-8b87-5214d3cd4f12',
        raw: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt culpa qui officia deserunt mollit anim est laborum.',
        delta_object:
          '{"ops":[{"insert":"Lorem ipsum dolor sit amet, "},{"attributes":{"glossary":"798d7220-7600-49f4-8284-a14217446d94"},"insert":"consectetur"},{"insert":" adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo "},{"attributes":{"glossary":"53671de8-2ae8-4691-9619-13c4296c83fa"},"insert":"consequat"},{"insert":". Duis aute irure dolor in reprehenderit in voluptate velit "},{"attributes":{"glossary":"c0a7219e-c1d2-4781-b0ef-3e488ae4f1e3"},"insert":"esse"},{"insert":" cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in "},{"attributes":{"glossary":"4e5d2f64-768e-4362-8169-c5acbb0e6aa4"},"insert":"culpa"},{"insert":" qui officia "},{"attributes":{"glossary":"2416e113-2248-4c09-8d57-e926268a1d82"},"insert":"deserunt"},{"insert":" "},{"attributes":{"glossary":"79fcee24-8314-477f-8d0b-6f42fd5963c1"},"insert":"mollit"},{"insert":" anim id est laborum.\\n"}]}',
        type: 'book_content',
        book_title: 'Physics',
        book_tag: null,
        book_tag_colour: null,
        chapter_order: 1,
        part: 1,
        subchapter_order: 1,
        subchapter_title: 'Edited Section 1',
        content_order: 3,
        resource_order: null,
        book_id: '123'
      }
    ]
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
  component: WysiwygEditor
}
