// Wysiwyg/Wysiwyg.tsx - Wysiwyg component

import React from 'react'
import styled from 'styled-components'
import Quill from 'quill'
import { includes, values, propOr, any, propEq, pipe } from 'ramda'

import 'quill/dist/quill.snow.css'
import ReactTooltip from 'react-tooltip'
import { isNotNilOrEmpty } from '../../utils/ramda'
import { getGlossaryIds, HIGHLIGHT_BLOTS } from './utils'
import {
  addAdminHighlightsBlotToQuill,
  addGlossaryBlotToQuill,
  addImageBlotToQuill,
  addHighlightBlots,
  addFontColorBlots
} from './customBlots'

import GlossaryTooltips from './components/GlossaryTooltips'
import katex from 'katex'
import 'katex/dist/katex.min.css'
import { ModalWysiwygPreview } from './ModalWysiwygPreview'
// @ts-ignore
window.katex = katex
interface TextEditorProps {
  id: string
  bookContentId?: string
  value: any
  withHighlights?: boolean
  withYoursHighlights?: boolean
  getPhraseDetails?: (e: any) => void
  redirectHandler?: (e: any) => void
  onHighlightChange?: (e) => void
}

const WysiwygViewer = (props: TextEditorProps): JSX.Element => {
  const {
    id,
    getPhraseDetails,
    value,
    bookContentId,
    withHighlights,
    withYoursHighlights,
    onHighlightChange,
    redirectHandler
  } = props
  const [quill, setQuill] = React.useState()

  // useCallback instead of useRef is used to make sure the wrapper ref is always defined
  // as soon as the element is rendered on the page it will use this callback
  const wrapperRef = React.useCallback(wrapper => {
    addGlossaryBlotToQuill()
    addAdminHighlightsBlotToQuill()
    addHighlightBlots()
    addImageBlotToQuill()
    addFontColorBlots()
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

  const removeHighlights = () => {
    // @ts-ignore
    values(HIGHLIGHT_BLOTS).forEach(blot => quill.format(blot, false, 'api'))
  }

  const isClickedInside = mouseEvent => {
    const path = propOr([], 'path', mouseEvent)
    const isClickedInsideSelf = any(propEq('id', id))(path)
    const isClickedInsideOtherEditor = any(
      pipe(propOr('', 'className'), includes('text-editor-container'))
    )(path)

    return isClickedInsideSelf || isClickedInsideOtherEditor
  }

  const handleMouseDown = e => {
    const targetElement = e.target
    const highlightData = targetElement.getAttribute('data-highlight')
    const farthestViewportElement = propOr(
      {},
      'farthestViewportElement',
      targetElement
    )
    const elementId = propOr('null', 'id', targetElement)
    const farthestViewportElementId = propOr(
      'null',
      'id',
      farthestViewportElement
    )
    const isColorPicker = includes('color-', highlightData || 'null')
    const isDeleteButton =
      includes('delete-highlight', elementId) ||
      includes('delete-highlight', farthestViewportElementId)

    // This is to reset the lastRange when user clicks outside of the area
    // because of the issue, when user selects another area in different
    // quill editor, then the highlight is set on the editor which loses focus
    // because of lastRange saved
    if (!isClickedInside(e) && !isColorPicker && !isDeleteButton) {
      // @ts-ignore
      quill.setSelection(0, 0)
    }

    if (isColorPicker && isNotNilOrEmpty(quill)) {
      // @ts-ignore
      quill.update()
      removeHighlights()
      // @ts-ignore
      quill.format(HIGHLIGHT_BLOTS[highlightData], true, 'api')
      // @ts-ignore
      quill.setSelection(0, 0)
      onHighlightChange && onHighlightChange(quill)
    }

    if (isDeleteButton && isNotNilOrEmpty(quill)) {
      // @ts-ignore
      quill.update()
      removeHighlights()
      // @ts-ignore
      quill.setSelection(0, 0)
      onHighlightChange && onHighlightChange(quill)
    }
  }

  React.useEffect(() => {
    document.addEventListener('mousedown', handleMouseDown)

    return () => {
      document.removeEventListener('mousedown', handleMouseDown)
    }
  }, [quill])

  const adminHighlightClassName = withHighlights ? 'with-highlights' : ''
  const yourHighlightClassName = withYoursHighlights ? 'your-highlights' : ''

  return (
    // This is a workaround to allow selecting only within the div
    // because of the issue, when user selects multiple quill areas at once
    // and wants to highlight the selected text - selection can be done
    // only within one quill editor context
    <Container contentEditable className={`${adminHighlightClassName}`}>
      <TextViewerContainer
        className={`${yourHighlightClassName}`}
        ref={wrapperRef}
        id={id}
      />
      <GlossaryTooltips
        bookContentId={bookContentId}
        getPhraseDetails={getPhraseDetails}
        glossaryIds={glossaryIds}
        redirectHandler={redirectHandler}
      />
      {/* @ts-ignore */}
      <ModalWysiwygPreview value={value} />
    </Container>
  )
}

WysiwygViewer.defaultProps = {
  glossaryDefinitions: []
}

const Container = styled.div`
  outline: none;
  border: none;

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
`

const TextViewerContainer = styled.div`
  strong {
    font-weight: bold;
  }

  .glossary-word:hover {
    color: ${({ theme }) => theme.palette.darkblue04} !important;
  }

  .ql-formats .ql-glossary {
    white-space: nowrap;
    word-break: keep-all;
    min-width: 200px;
  }

  .ql-editor {
    padding: 0;
    caret-color: transparent;
  }

  .ql-container {
    border: none !important;
  }

  .ql-container.ql-snow.ql-disabled {
    border: none;
  }

  .ql-editor h1 {
    font-size: 22px !important;
    line-height: 29px !important;
  }

  .ql-editor h2 {
    font-size: 19px !important;
    line-height: 23px !important;
    img {
      &:hover {
        cursor: pointer;
      }
      &:active {
        cursor: pointer;
      }
    }
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

  * {
    overflow-x: hidden;
    overflow-y: hidden;
  }

  &.your-highlights {
    .green-highlight {
      background-color: ${({ theme }) => theme.palette.highlightGreen};
    }

    .purple-highlight {
      background-color: ${({ theme }) => theme.palette.purple08};
    }

    .red-highlight {
      background-color: ${({ theme }) => theme.palette.deepred07};
    }

    .yellow-highlight {
      background-color: ${({ theme }) => theme.palette.highlightYellow};
    }

    .blue-highlight {
      background-color: ${({ theme }) => theme.palette.lightblue05};
    }

    .orange-highlight {
      background-color: ${({ theme }) => theme.palette.orange05};
    }
  }

  .ql-container .ql-editor .admin-highlights .color-green,
  .ql-container .ql-editor .color-green .admin-highlights,
  .color-green {
    color: ${({ theme }) => theme.palette.green02} !important;
  }

  .ql-container .ql-editor .admin-highlights .color-purple,
  .ql-container .ql-editor .color-purple .admin-highlights,
  .color-purple {
    color: ${({ theme }) => theme.palette.purple01} !important;
  }

  .ql-container .ql-editor .admin-highlights .color-blue,
  .ql-container .ql-editor .color-blue .admin-highlights,
  .color-blue {
    color: ${({ theme }) => theme.palette.lightblue01} !important;
  }

  .ql-container .ql-editor .admin-highlights .color-orange,
  .ql-container .ql-editor .color-orange .admin-highlights,
  .color-orange {
    color: ${({ theme }) => theme.palette.orange01} !important;
  }

  .ql-container .ql-editor .admin-highlights .color-black,
  .ql-container .ql-editor .color-black .admin-highlights,
  .color-black {
    color: ${({ theme }) => theme.palette.black} !important;
  }

  .ql-container .ql-editor .admin-highlights .color-brown,
  .ql-container .ql-editor .color-brown .admin-highlights,
  .color-brown {
    color: ${({ theme }) => theme.palette.brown01} !important;
  }

  .ql-container .ql-editor .admin-highlights .color-red,
  .ql-container .ql-editor .color-red .admin-highlights,
  .color-red {
    color: ${({ theme }) => theme.palette.deepred01} !important;
  }
`

export default WysiwygViewer
