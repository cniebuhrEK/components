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
    fontColor?: boolean
  }
  handleFetchGlossaryList?: (e: any) => void
  handleScanGlossaryList?: (e: any) => void
  handleCreateNew?: (e: any) => Promise<void>
  getPhraseDetails?: (e: any) => void
  redirectHandler?: (e: any) => void
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
    handleCreateNew,
    redirectHandler
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

  // @ts-ignore
  const tooltipsDelta = hasContent() ? quill.getContents() : initialValue

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
      {getPhraseDetails && (
        <GlossaryTooltips
          bookContentId={bookContentId}
          getPhraseDetails={getPhraseDetails}
          deltaObject={tooltipsDelta}
          redirectHandler={redirectHandler}
        />
      )}
    </TextEditorContainer>
  )
}

const TextEditorContainer = styled.div`
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.backgrounds.main};

  &,
  * {
    color: ${({ theme }) => theme.colors.main.text};
  }

  &.with-highlights {
    .ql-container * {
      color: ${({ theme }) =>
        theme.colors.editorFontColors.admin.font} !important;
    }

    .ql-container .admin-highlights {
      color: ${({ theme }) => theme.colors.main.text} !important;
    }
  }

  .ql-stroke {
    stroke: ${({ theme }) => theme.colors.main.text};
  }

  .ql-fill {
    fill: ${({ theme }) => theme.colors.main.text};
  }

  .editor-label {
    display: inline-flex;
    align-items: center;
    color: ${({ error, theme }) =>
      error ? theme.colors.main.error500 : theme.colors.main.text};
    margin-bottom: 8px;
  }

  .ql-toolbar.ql-snow,
  .ql-container.ql-snow {
    border-color: ${({ error, theme }) =>
      error ? theme.colors.main.error500 : 'transparent'};
  }

  .ql-snow.ql-toolbar button:hover .ql-fill,
  .ql-snow .ql-toolbar button:hover .ql-fill,
  .ql-snow.ql-toolbar button:focus .ql-fill,
  .ql-snow .ql-toolbar button:focus .ql-fill,
  .ql-snow.ql-toolbar button.ql-active .ql-fill,
  .ql-snow .ql-toolbar button.ql-active .ql-fill,
  .ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill,
  .ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill,
  .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,
  .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill,
  .ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill,
  .ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill,
  .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill,
  .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill,
  .ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill,
  .ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill,
  .ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill,
  .ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill,
  .ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill,
  .ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill,
  .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,
  .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,
  .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,
  .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,
  .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,
  .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,
  .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,
  .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill {
    fill: ${({ theme }) => theme.colors.main.primary500};
  }

  .ql-snow.ql-toolbar button:hover .ql-stroke,
  .ql-snow .ql-toolbar button:hover .ql-stroke,
  .ql-snow.ql-toolbar button:focus .ql-stroke,
  .ql-snow .ql-toolbar button:focus .ql-stroke,
  .ql-snow.ql-toolbar button.ql-active .ql-stroke,
  .ql-snow .ql-toolbar button.ql-active .ql-stroke,
  .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,
  .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,
  .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,
  .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,
  .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,
  .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,
  .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,
  .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,
  .ql-snow.ql-toolbar button:hover .ql-stroke-miter,
  .ql-snow .ql-toolbar button:hover .ql-stroke-miter,
  .ql-snow.ql-toolbar button:focus .ql-stroke-miter,
  .ql-snow .ql-toolbar button:focus .ql-stroke-miter,
  .ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,
  .ql-snow .ql-toolbar button.ql-active .ql-stroke-miter,
  .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,
  .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,
  .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,
  .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,
  .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,
  .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,
  .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,
  .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter {
    stroke: ${({ theme }) => theme.colors.main.primary500};
  }

  .ql-snow.ql-toolbar button:hover,
  .ql-snow .ql-toolbar button:hover,
  .ql-snow.ql-toolbar button:focus,
  .ql-snow .ql-toolbar button:focus,
  .ql-snow.ql-toolbar button.ql-active,
  .ql-snow .ql-toolbar button.ql-active,
  .ql-snow.ql-toolbar .ql-picker-label:hover,
  .ql-snow .ql-toolbar .ql-picker-label:hover,
  .ql-snow.ql-toolbar .ql-picker-label.ql-active,
  .ql-snow .ql-toolbar .ql-picker-label.ql-active,
  .ql-snow.ql-toolbar .ql-picker-item:hover,
  .ql-snow .ql-toolbar .ql-picker-item:hover,
  .ql-snow.ql-toolbar .ql-picker-item.ql-selected,
  .ql-snow .ql-toolbar .ql-picker-item.ql-selected {
    color: ${({ theme }) => theme.colors.main.primary500};
  }

  .ql-toolbar.ql-snow {
    border-bottom: 1px solid
      ${({ error, theme }) =>
        error ? theme.colors.main.error500 : theme.colors.main.grey300};
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
      error ? theme.colors.main.error500 : theme.colors.main.text};
  }
`

const WysiwygContainer = styled.div`
  overflow: auto;

  strong {
    font-weight: bold;
  }

  .glossary-word {
    color: ${({ theme }) => theme.colors.secondary500} !important;
  }

  .ql-formats .ql-glossary {
    white-space: nowrap;
    word-break: keep-all;
    min-width: 200px;
  }

  .ql-editor h1 {
    font-size: 16px !important;
    line-height: 29px !important;
  }

  .ql-editor h2 {
    font-size: 15px !important;
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

  .ql-container .ql-editor .admin-highlights .color-green,
  .ql-container .ql-editor .color-green .admin-highlights,
  .color-green {
    color: ${({ theme }) =>
      theme.colors.editorFontColors.green.font} !important;
  }

  .ql-container .ql-editor .admin-highlights .color-purple,
  .ql-container .ql-editor .color-purple .admin-highlights,
  .color-purple {
    color: ${({ theme }) =>
      theme.colors.editorFontColors.purple.font} !important;
  }

  .ql-container .ql-editor .admin-highlights .color-blue,
  .ql-container .ql-editor .color-blue .admin-highlights,
  .color-blue {
    color: ${({ theme }) => theme.colors.editorFontColors.blue.font} !important;
  }

  .ql-container .ql-editor .admin-highlights .color-orange,
  .ql-container .ql-editor .color-orange .admin-highlights,
  .color-orange {
    color: ${({ theme }) =>
      theme.colors.editorFontColors.orange.font} !important;
  }

  .ql-container .ql-editor .admin-highlights .color-black,
  .ql-container .ql-editor .color-black .admin-highlights,
  .color-black {
    color: ${({ theme }) =>
      theme.colors.editorFontColors.black.font} !important;
  }

  .ql-container .ql-editor .admin-highlights .color-brown,
  .ql-container .ql-editor .color-brown .admin-highlights,
  .color-brown {
    color: ${({ theme }) =>
      theme.colors.editorFontColors.brown.font} !important;
  }

  .ql-container .ql-editor .admin-highlights .color-red,
  .ql-container .ql-editor .color-red .admin-highlights,
  .color-red {
    color: ${({ theme }) => theme.colors.editorFontColors.red.font} !important;
  }

  .ql-container .ql-editor .admin-highlights .color-grey,
  .ql-container .ql-editor .color-grey .admin-highlights,
  .color-grey {
    color: ${({ theme }) => theme.colors.editorFontColors.grey.font} !important;
  }

  .ql-container .ql-editor .admin-highlights .color-yellow,
  .ql-container .ql-editor .color-yellow .admin-highlights,
  .color-yellow {
    color: ${({ theme }) =>
      theme.colors.editorFontColors.yellow.font} !important;
  }

  .ql-container .ql-editor .admin-highlights .color-violet,
  .ql-container .ql-editor .color-violet .admin-highlights,
  .color-violet {
    color: ${({ theme }) =>
      theme.colors.editorFontColors.violet.font} !important;
  }

  .ql-container .ql-editor .admin-highlights .color-lightRed,
  .ql-container .ql-editor .color-lightRed .admin-highlights,
  .color-lightRed {
    color: ${({ theme }) =>
      theme.colors.editorFontColors.lightRed.font} !important;
  }

  .ql-container .ql-editor .admin-highlights .color-azure,
  .ql-container .ql-editor .color-azure .admin-highlights,
  .color-azure {
    color: ${({ theme }) =>
      theme.colors.editorFontColors.azure.font} !important;
  }

  .ql-container .ql-editor .admin-highlights .color-lightGreen,
  .ql-container .ql-editor .color-lightGreen .admin-highlights,
  .color-lightGreen {
    color: ${({ theme }) =>
      theme.colors.editorFontColors.lightGreen.font} !important;
  }

  .ql-container .ql-editor .admin-highlights .color-lightBrown,
  .ql-container .ql-editor .color-lightBrown .admin-highlights,
  .color-lightBrown {
    color: ${({ theme }) =>
      theme.colors.editorFontColors.lightBrown.font} !important;
  }

  // plop_create_font_color_class_viewer
`

export default WysiwygEditor
