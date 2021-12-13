// Wysiwyg/Wysiwyg.tsx - Wysiwyg component

import React from 'react'
import styled from 'styled-components'
import Quill from 'quill'
import { includes, values, propOr } from 'ramda'

import 'quill/dist/quill.snow.css'
import ReactTooltip from 'react-tooltip'
import { isNotNilOrEmpty } from '../../utils/ramda'
import { getGlossaryIds, HIGHLIGHT_BLOTS } from './utils'
import {
  addAdminHighlightsBlotToQuill,
  addGlossaryBlotToQuill,
  addImageBlotToQuill,
  addHighlightBlots
} from './customBlots'

import GlossaryTooltips from './components/GlossaryTooltips'
import katex from 'katex'
import 'katex/dist/katex.min.css'
// @ts-ignore
window.katex = katex

interface TextEditorProps {
  id: string
  bookContentId?: string
  value: any
  withHighlights?: boolean
  withYoursHighlights?: boolean
  getPhraseDetails?: (e: any) => void
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
    onHighlightChange
  } = props
  const [quill, setQuill] = React.useState()

  // useCallback instead of useRef is used to make sure the wrapper ref is always defined
  // as soon as the element is rendered on the page it will use this callback
  const wrapperRef = React.useCallback(wrapper => {
    addGlossaryBlotToQuill()
    addAdminHighlightsBlotToQuill()
    addHighlightBlots()
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

  const removeHighlights = () => {
    // @ts-ignore
    values(HIGHLIGHT_BLOTS).map(blot => quill.format(blot, false, 'api'))
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

    if (isColorPicker && isNotNilOrEmpty(quill)) {
      removeHighlights()
      // @ts-ignore
      quill.format(HIGHLIGHT_BLOTS[highlightData], true, 'api')
      // @ts-ignore
      quill.setSelection(0, 0)
      onHighlightChange && onHighlightChange(quill)
    }

    if (isDeleteButton && isNotNilOrEmpty(quill)) {
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

  const adminHighlightClassName = withHighlights ? 'admin-highlights' : ''
  const yourHighlightClassName = withYoursHighlights ? 'your-highlights' : ''

  return (
    <div>
      <TextViewerContainer
        className={`${adminHighlightClassName} ${yourHighlightClassName}`}
        ref={wrapperRef}
        id={id}
      />
      <GlossaryTooltips
        bookContentId={bookContentId}
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
  &.admin-highlights {
    * {
      color: ${({ theme }) => theme.palette.inactive} !important;
    }

    .admin-highlights {
      color: ${({ theme }) => theme.palette.darkblue01} !important;
    }
  }

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
`

export default WysiwygViewer
