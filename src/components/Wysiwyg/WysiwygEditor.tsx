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
  handleScanGlossaryList?: (e: any) => void
  handleCreateNew?: (e: any) => Promise<void>
  getPhraseDetails?: (e: any) => void
  glossaryEntries?: GlossaryPhrase[]
  glossaryEntriesPagination?: PaginationProps
  required?: boolean
  error?: boolean
  errorText?: string
  label?: string | JSX.Element
  initialValue?: any
  bookContentId?: string
}

const WysiwygEditor = (props: TextEditorProps): JSX.Element => {
  const {
    glossaryEntries,
    handleFetchGlossaryList,
    handleScanGlossaryList,
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
    initialValue,
    bookContentId,
    handleCreateNew
  } = props
  const { glossary } = formats
  const [quill, setQuill] = React.useState()
  const [hasAdminHighlights, setHasAdminHighlights] = React.useState(false)

  // useCallback instead of useRef is used to make sure the wrapper ref is always defined
  // as soon as the element is rendered on the page it will use this callback
  const wrapperRef = React.useCallback(wrapper => {
    // make sure if we have wrapper instance
    if (!wrapper) return
    const Delta = Quill.import('delta')

    // this is to reset the code on each component mount
    wrapper.innerHTML = ''
    const editor = document.createElement('div')
    wrapper.append(editor)
    const q = new Quill(editor, {
      theme: 'snow',
      modules: {
        toolbar: `#toolbar-${id}`,
        clipboard: {
          matchers: [
            [
              Node.ELEMENT_NODE,
              (_node, delta) =>
                delta.compose(
                  new Delta().retain(delta.length(), {
                    color: false,
                    background: false
                  })
                )
            ]
          ]
        }
      }
    })
    setQuill(q)
  }, [])

  const checkAdminHighlight = q => {
    // @ts-ignore
    const deltaObject = q.getContents()

    const hasHighlights = R.pipe(
      R.propOr([], 'ops'),
      R.find(R.pipe(R.path(['attributes', 'a-highlights']), R.equals(true))),
      R.isNil,
      R.not
    )(deltaObject)
    setHasAdminHighlights(hasHighlights)
  }

  React.useEffect(() => {
    if (isNotNilOrEmpty(quill)) {
      // @ts-ignore
      quill.setContents(initialValue)
      // @ts-ignore
      quill.update()
      checkAdminHighlight(quill)
      glossary && ReactTooltip.rebuild()
    }
  }, [quill, initialValue])

  React.useEffect(() => {
    // make sure if we have quill instance
    if (!quill) return

    const handleTextChange = () => {
      // @ts-ignore
      onChange(quill)
      checkAdminHighlight(quill)
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
    <TextEditorContainer
      error={error}
      className={`${
        hasAdminHighlights ? 'with-highlights' : ''
      } text-editor-container`}
    >
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
        handleScanGlossaryList={handleScanGlossaryList}
        formats={formats}
        editorInstance={quill}
        handleS3Upload={handleS3Upload}
        id={id}
        handleCreateNew={handleCreateNew}
      />
      <WysiwygContainer error={error} ref={wrapperRef} id={id} />
      {error && <div className='editor-error'>{errorText}</div>}
      <GlossaryTooltips
        bookContentId={bookContentId}
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

  &.with-highlights {
    .ql-container * {
      color: ${({ theme }) => theme.palette.inactive} !important;
    }

    .ql-container .admin-highlights {
      color: ${({ theme }) => theme.palette.darkblue01} !important;
    }
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

  .ql-toolbar.ql-snow button {
    padding: 3px !important;
    width: 20px !important;
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
    color: ${({ theme }) => theme.palette.darkblue04} !important;
  }

  .ql-formats .ql-glossary {
    white-space: nowrap;
    word-break: keep-all;
    min-width: 200px;
  }

  .ql-editor h1 {
    font-size: 22px !important;
    line-height: 29px !important;
  }

  .ql-editor h2 {
    font-size: 19px !important;
    line-height: 23px !important;
  }

  .ql-size-huge {
    font-size: 22px !important;
    line-height: 29px !important;
  }

  .ql-size-large {
    font-size: 19px !important;
    line-height: 23px !important;
  }

  .ql-size-small {
    font-size: 10px !important;
    line-height: 12px !important;
  }
`

export default WysiwygEditor
