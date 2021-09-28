// Wysiwyg/Wysiwyg.tsx - Wysiwyg component

import React from 'react'
import styled from 'styled-components'
import Quill from 'quill'
import * as R from 'ramda'

import 'quill/dist/quill.snow.css'
import ReactTooltip from 'react-tooltip'
import { isNotNilOrEmpty } from '../../utils/ramda'
import { addGlossaryBlotToQuill } from './customBlots'

import katex from 'katex'
import 'katex/dist/katex.min.css'
// @ts-ignore
window.katex = katex

interface TextEditorProps {
  id: string
  value: any
  glossaryDefinitions?: {
    id: string
    word: string
    content: string
  }[]
}

const WysiwygEditor = (props: TextEditorProps): JSX.Element => {
  const { id, glossaryDefinitions, value } = props
  const [quill, setQuill] = React.useState()

  // useCallback instead of useRef is used to make sure the wrapper ref is always defined
  // as soon as the element is rendered on the page it will use this callback
  const wrapperRef = React.useCallback(wrapper => {
    addGlossaryBlotToQuill()
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

  const renderTooltips = R.map(definition => (
    <ReactTooltip
      id={definition.id}
      key={`${definition.id}-tooltip`}
      place='top'
      effect='solid'
      data-class='tooltip-content'
      clickable
    >
      {definition.content}
    </ReactTooltip>
  ))(glossaryDefinitions)

  return (
    <div>
      <TextViewerContainer ref={wrapperRef} id={id} />
      <TooltipsContainer>{renderTooltips}</TooltipsContainer>
    </div>
  )
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
`

const TooltipsContainer = styled.div`
  .__react_component_tooltip {
    text-align: center !important;
    background-color: ${({ theme }) => theme.palette.biege} !important;
    opacity: 1 !important;
    color: ${({ theme }) => theme.palette.textDark} !important;
    padding: 10px;
    border: none !important;
    margin-top: 0px !important;
    box-shadow: ${({ theme }) => theme.shadows.darkShadow} !important;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: -0.1px;

    &::before,
    &::after {
      display: none;
    }
  }
`

export default WysiwygEditor
