// Wysiwyg/Wysiwyg.tsx - Wysiwyg component

import React from 'react'
import styled from 'styled-components'
import Quill from 'quill'

import 'quill/dist/quill.snow.css'
import ReactTooltip from 'react-tooltip'
import { isNotNilOrEmpty } from '../../utils/ramda'
import { getGlossaryIds } from './utils'
import {
  addAdminHighlightsBlotToQuill,
  addGlossaryBlotToQuill,
  addImageBlotToQuill
} from './customBlots'

import GlossaryTooltips from './components/GlossaryTooltips'
import katex from 'katex'
import 'katex/dist/katex.min.css'
// @ts-ignore
window.katex = katex

interface TextEditorProps {
  id: string
  value: any
  getPhraseDetails?: (e: any) => void
}

const WysiwygViewer = (props: TextEditorProps): JSX.Element => {
  const { id, getPhraseDetails, value } = props
  const [quill, setQuill] = React.useState()

  // useCallback instead of useRef is used to make sure the wrapper ref is always defined
  // as soon as the element is rendered on the page it will use this callback
  const wrapperRef = React.useCallback(wrapper => {
    addGlossaryBlotToQuill()
    addAdminHighlightsBlotToQuill()
    addImageBlotToQuill()
    // make sure if we have the wrapper
    if (!wrapper) return

    // this is to reset the code on each component mount
    wrapper.innerHTML = ''
    const editor = document.createElement('div')
    wrapper.append(editor)
    const q = new Quill(editor, {
      theme: 'snow',
      modules: {
        toolbar: false
      },
      readOnly: true
    })
    setQuill(q)
  }, [])

  React.useEffect(() => {
    if (isNotNilOrEmpty(quill)) {
      // @ts-ignore
      quill.setContents(value)
      ReactTooltip.rebuild()
    }
  }, [quill, value])

  const glossaryIds = getGlossaryIds(value)

  return (
    <div>
      <TextViewerContainer ref={wrapperRef} id={id} />
      <GlossaryTooltips
        getPhraseDetails={getPhraseDetails}
        glossaryIds={glossaryIds}
      />
    </div>
  )
}

WysiwygViewer.defaultProps = {
  glossaryDefinitions: []
}

const TextViewerContainer = styled.div`
  strong {
    font-weight: bold;
  }

  .glossary-word {
    font-weight: bold;
    text-decoration: underline;
  }

  .ql-formats .ql-glossary {
    white-space: nowrap;
    word-break: keep-all;
    min-width: 200px;
  }

  .ql-editor {
    padding: 0;
  }

  .ql-container.ql-snow.ql-disabled {
    border: none;
  }

  .admin-highlights {
    color: ${({ theme }) => theme.palette.inactive} !important;
  }
`

export default WysiwygViewer
