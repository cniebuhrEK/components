import React from 'react'
import QuillHtmlConverter from './QuillHtmlConverter'

const Template = args => <QuillHtmlConverter {...args} />

export const Default = Template.bind({})
Default.args = {
  callback: html => console.log({ html }),
  value: {
    ops: [
      {
        insert:
          'Mauris turpis nunc, blandit et, volutpat molestie, porta ut, ligula.'
      },
      {
        attributes: {
          header: 1
        },
        insert: '\n'
      },
      {
        insert:
          '\nVestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus.'
      },
      {
        attributes: {
          header: 2
        },
        insert: '\n'
      },
      {
        insert: '\n'
      },
      {
        attributes: {
          'a-highlights': true
        },
        insert: 'Cras ultricies mi eu turpis hendre'
      },
      {
        insert:
          'rit fringilla. Cras id dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis porttitor '
      },
      {
        attributes: {
          color: '',
          'font-color-lightRed': true
        },
        insert: 'congue, elit erat euismod or'
      },
      {
        insert:
          'ci, ac placerat dolor lectus quis orci.\n\nCurabitur vestibulum aliquam leo. Duis vel nibh at velit scelerisque suscipit. Quisque rutrum. Don'
      },
      {
        attributes: {
          color: '',
          'font-color-lightGreen': true
        },
        insert: 'ec mollis hendrer'
      },
      {
        insert:
          'it risus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.\n\n'
      },
      {
        attributes: {
          alt: '45ed410d-4006-44f4-888e-a3d1ed4b95f2'
        },
        insert: {
          's3-image': {
            url: 'https://examkrackers-storage-test.s3.amazonaws.com/wysiwyg-files/823e53a0975a9d99932462b84424ee8494c1b375.svg',
            alt: '45ed410d-4006-44f4-888e-a3d1ed4b95f2'
          }
        }
      },
      {
        attributes: {
          align: 'center'
        },
        insert: '\n'
      },
      {
        insert:
          '\nFusce commodo aliquam arcu. Vivamus elementum semper nisi. Phasellus a est. Nunc interdum lacus sit amet orci.\nVestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce id purus.'
      },
      {
        attributes: {
          list: 'bullet'
        },
        insert: '\n'
      },
      {
        insert: 'Cras ultricies mi eu turpis '
      },
      {
        attributes: {
          bold: true
        },
        insert: 'hendrerit fringilla.'
      },
      {
        insert: ' Phasellus viverra nulla ut metus varius laoreet.'
      },
      {
        attributes: {
          strike: true
        },
        insert: ' Etiam ultricies nisi vel'
      },
      {
        insert: ' augue. '
      },
      {
        attributes: {
          italic: true
        },
        insert: 'In consectetuer turpis ut velit. '
      },
      {
        insert: 'Vivamus quis mi.\n\n'
      },
      {
        insert: {
          formula: 'e=mc2'
        }
      },
      {
        insert: ' '
      },
      {
        attributes: {
          align: 'center'
        },
        insert: '\n'
      },
      {
        insert:
          '\nPhasellus blandit leo ut odio. \nAenean tellus metus, bibendum sed, posuere ac, mattis non, nunc. '
      },
      {
        attributes: {
          list: 'ordered'
        },
        insert: '\n'
      },
      {
        insert: 'Praesent blandit laoreet nibh. '
      },
      {
        attributes: {
          list: 'ordered'
        },
        insert: '\n'
      },
      {
        insert: 'Etiam sit amet orci eget eros faucibus tincidunt. '
      },
      {
        attributes: {
          list: 'ordered'
        },
        insert: '\n'
      },
      {
        insert: 'Morbi vestibulum volutpat enim.'
      },
      {
        attributes: {
          list: 'ordered'
        },
        insert: '\n'
      },
      {
        insert: '\n'
      }
    ]
  }
}

export default {
  title: 'Atoms/QuillHtmlConverter',
  component: QuillHtmlConverter
}
