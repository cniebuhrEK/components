// Wysiwyg/Wysiwyg.tsx - Wysiwyg component

import React from 'react'
import styled from 'styled-components'
import Quill from 'quill'
import Toolbar from './Toolbar'
import ReactTooltip from 'react-tooltip'
import GlossaryTooltips from './components/GlossaryTooltips'
import * as R from 'ramda'

import 'quill/dist/quill.snow.css'
import { isNotNilOrEmpty } from '../../utils/ramda'

import katex from 'katex'
import 'katex/dist/katex.min.css'

// eslint-disable-next-line no-unused-vars
import { GlossaryPhrase, PaginationProps } from './components/SelectGlossary'
import { getGlossaryIds } from './utils'

// @ts-ignore
window.katex = katex

interface TextEditorProps {
  id: string
  handleS3Upload?: (e: any) => void
  onChange: (e: any) => void
  formats: {
    size?: boolean
    header?: boolean
    direction?: boolean
    bold?: boolean
    italic?: boolean
    underline?: boolean
    strike?: boolean
    orderedList?: boolean
    bulletList?: boolean
    increaseIndent?: boolean
    decreaseIndent?: boolean
    align?: boolean
    scriptSuper?: boolean
    scriptSub?: boolean
    blockquote?: boolean
    formula?: boolean
    glossary?: boolean
    clean?: boolean
    customImage?: boolean
    adminHighlights?: boolean
  }
  handleFetchGlossaryList?: (e: any) => void
  getPhraseDetails?: (e: any) => void
  glossaryEntries?: GlossaryPhrase[]
  glossaryEntriesPagination?: PaginationProps
  required?: boolean
  error?: boolean
  errorText?: string
  label?: string | JSX.Element
  initialValue?: any
}

const WysiwygEditor = (props: TextEditorProps): JSX.Element => {
  const {
    glossaryEntries,
    handleFetchGlossaryList,
    getPhraseDetails,
    glossaryEntriesPagination,
    id,
    handleS3Upload,
    formats,
    onChange,
    label,
    required,
    error,
    errorText,
    initialValue
  } = props
  const { glossary } = formats
  const [quill, setQuill] = React.useState()

  // useCallback instead of useRef is used to make sure the wrapper ref is always defined
  // as soon as the element is rendered on the page it will use this callback
  const wrapperRef = React.useCallback(wrapper => {
    // make sure if we have wrapper instance
    if (!wrapper) return

    // this is to reset the code on each component mount
    wrapper.innerHTML = ''
    const editor = document.createElement('div')
    wrapper.append(editor)
    const q = new Quill(editor, {
      theme: 'snow',
      modules: { toolbar: '#toolbar' }
    })
    setQuill(q)
  }, [])

  React.useEffect(() => {
    if (isNotNilOrEmpty(quill)) {
      // @ts-ignore
      quill.setContents(initialValue)
      // @ts-ignore
      quill.update()
      glossary && ReactTooltip.rebuild()
    }
  }, [quill, initialValue])

  React.useEffect(() => {
    // make sure if we have quill instance
    if (!quill) return

    const handleTextChange = () => {
      // @ts-ignore
      onChange(quill)
    }

    // @ts-ignore
    quill.on('text-change', handleTextChange)

    return () => {
      // @ts-ignore
      quill.off('text-change', handleTextChange)
    }
  }, [quill, onChange])

  const hasContent = () => {
    // @ts-ignore
    if (quill) {
      // @ts-ignore
      const raw = quill.getText()
      return R.isEmpty(raw) || R.isNil(raw) || R.not(R.equals(raw, '\n'))
    }

    return false
  }

  const glossaryIds = getGlossaryIds(
    // @ts-ignore
    hasContent() ? quill.getContents() : initialValue
  )

  return (
    <TextEditorContainer error={error}>
      {label && (
        <label htmlFor={id} className='editor-label'>
          {label}
          {required && ' *'}
        </label>
      )}
      <Toolbar
        glossaryEntriesPagination={glossaryEntriesPagination}
        glossaryEntries={glossaryEntries}
        handleFetchGlossaryList={handleFetchGlossaryList}
        formats={formats}
        editorInstance={quill}
        handleS3Upload={handleS3Upload}
        id={id}
      />
      <WysiwygContainer error={error} ref={wrapperRef} id={id} />
      {error && <div className='editor-error'>{errorText}</div>}
      <GlossaryTooltips
        getPhraseDetails={getPhraseDetails}
        glossaryIds={glossaryIds}
      />
    </TextEditorContainer>
  )
}

const TextEditorContainer = styled.div`
  &,
  * {
    color: ${({ theme }) => theme.palette.darkblue01};
  }

  .ql-stroke {
    stroke: ${({ theme }) => theme.palette.darkblue01};
  }

  .ql-fill {
    fill: ${({ theme }) => theme.palette.darkblue01};
  }

  .editor-label {
    display: inline-flex;
    align-items: center;
    color: ${({ error, theme }) =>
      error ? theme.palette.red05 : theme.palette.darkblue01};
    margin-bottom: 8px;
  }

  .ql-toolbar.ql-snow,
  .ql-container.ql-snow {
    border-color: ${({ error, theme }) =>
      error ? theme.palette.red05 : theme.palette.darkblue01};
  }

  .ql-toolbar {
    border-bottom: 0;
  }

  .editor-error {
    color: ${({ error, theme }) =>
      error ? theme.palette.red05 : theme.palette.darkblue01};
  }
`

const WysiwygContainer = styled.div`
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

  .admin-highlights {
    color: ${({ theme }) => theme.palette.inactive} !important;
  }
`

export default WysiwygEditor
