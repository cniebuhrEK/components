// Wysiwyg/Wysiwyg.tsx - Wysiwyg component

import React, { memo } from 'react'
import styled from 'styled-components'
import Quill from 'quill'
import { propOr } from 'ramda'

import 'quill/dist/quill.snow.css'
import ReactTooltip from 'react-tooltip'
import { isNotNilOrEmpty } from '../../utils/ramda'
import {
  addAdminHighlightsBlotToQuill,
  addGlossaryBlotToQuill,
  addImageBlotToQuill,
  addHighlightBlots,
  addFontColorBlots
} from './customBlots'

import katex from 'katex'
import 'katex/dist/katex.min.css'
// @ts-ignore
window.katex = katex
interface TextEditorProps {
  id: string
  value: any
  withHighlights?: boolean
  withYoursHighlights?: boolean
  onHighlightChange?: (e) => void
  onSelectionChange?: (text, range, quill) => void
}

const WysiwygViewer = (props: TextEditorProps): JSX.Element => {
  const {
    id,
    value,
    withHighlights,
    withYoursHighlights,
    onSelectionChange
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

  // const removeHighlights = () => {
  //   // @ts-ignore
  //   values(HIGHLIGHT_BLOTS).forEach(blot => quill.format(blot, false, 'api'))
  // }
  //
  // const isClickedInside = mouseEvent => {
  //   const path = propOr([], 'path', mouseEvent)
  //   const isClickedInsideSelf = any(propEq('id', id))(path)
  //   const isClickedInsideOtherEditor = any(
  //     pipe(propOr('', 'className'), includes('text-editor-container'))
  //   )(path)
  //
  //   return isClickedInsideSelf || isClickedInsideOtherEditor
  // }
  //
  // const handleMouseDown = e => {
  //   const targetElement = e.target
  //   const highlightData = targetElement.getAttribute('data-highlight')
  //   const farthestViewportElement = propOr(
  //     {},
  //     'farthestViewportElement',
  //     targetElement
  //   )
  //   const elementId = propOr('null', 'id', targetElement)
  //   const farthestViewportElementId = propOr(
  //     'null',
  //     'id',
  //     farthestViewportElement
  //   )
  //   const isColorPicker = includes('color-', highlightData || 'null')
  //   const isDeleteButton =
  //     includes('delete-highlight', elementId) ||
  //     includes('delete-highlight', farthestViewportElementId)
  //
  //   // This is to reset the lastRange when user clicks outside of the area
  //   // because of the issue, when user selects another area in different
  //   // quill editor, then the highlight is set on the editor which loses focus
  //   // because of lastRange saved
  //   if (!isClickedInside(e) && !isColorPicker && !isDeleteButton) {
  //     // @ts-ignore
  //     quill.setSelection(0, 0)
  //   }
  //
  //   if (isColorPicker && isNotNilOrEmpty(quill)) {
  //     // @ts-ignore
  //     quill.update()
  //     removeHighlights()
  //     // @ts-ignore
  //     quill.format(HIGHLIGHT_BLOTS[highlightData], true, 'api')
  //     // @ts-ignore
  //     quill.setSelection(0, 0)
  //     onHighlightChange && onHighlightChange(quill)
  //   }
  //
  //   if (isDeleteButton && isNotNilOrEmpty(quill)) {
  //     // @ts-ignore
  //     quill.update()
  //     removeHighlights()
  //     // @ts-ignore
  //     quill.setSelection(0, 0)
  //     onHighlightChange && onHighlightChange(quill)
  //   }
  // }

  const handleSelectionChange = range => {
    const length = propOr(0, 'length', range)

    if (onSelectionChange && length > 0) {
      // @ts-ignore
      const text = quill.getText(range)
      onSelectionChange(text, range, quill)
    }
  }

  React.useEffect(() => {
    if (onSelectionChange && quill) {
      // @ts-ignore
      quill.on('selection-change', handleSelectionChange)
    }

    return () => {
      if (onSelectionChange && quill) {
        // @ts-ignore
        quill.off('selection-change', handleSelectionChange)
      }
    }
  }, [quill])

  const adminHighlightClassName = withHighlights ? 'with-highlights' : ''
  const yourHighlightClassName = withYoursHighlights ? 'your-highlights' : ''

  return (
    // This is a workaround to allow selecting only within the div
    // because of the issue, when user selects multiple quill areas at once
    // and wants to highlight the selected text - selection can be done
    // only within one quill editor context
    <Container
      contentEditable
      suppressContentEditableWarning
      className={`${adminHighlightClassName}`}
    >
      <TextViewerContainer
        className={`${yourHighlightClassName}`}
        ref={wrapperRef}
        id={id}
      />
    </Container>
  )
}

WysiwygViewer.defaultProps = {
  glossaryDefinitions: []
}

const Container = styled.div`
  outline: none;
  border: none;

  & .ql-editor {
    color: ${({ theme }) => theme.colors.main.text};
  }

  &.with-highlights {
    .ql-container .ql-editor {
      color: ${({ theme }) =>
        theme.colors.editorFontColors.admin.font} !important;
    }

    .ql-container .admin-highlights .ql-editor {
      color: ${({ theme }) => theme.colors.main.text} !important;
    }
  }
`

const TextViewerContainer = styled.div`
  strong {
    font-weight: bold;
  }

  .glossary-word:hover {
    color: ${({ theme }) => theme.colors.secondary500} !important;
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
    font-size: 16px !important;
    line-height: 29px !important;
  }

  .ql-editor h2 {
    font-size: 15px !important;
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

  .ql-editor p {
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
      background-color: ${({ theme }) =>
        theme.colors.highlights.green.background};
    }

    .purple-highlight {
      background-color: ${({ theme }) =>
        theme.colors.highlights.purple.background};
    }

    .red-highlight {
      background-color: ${({ theme }) =>
        theme.colors.highlights.red.background};
    }

    .yellow-highlight {
      background-color: ${({ theme }) =>
        theme.colors.highlights.yellow.background};
    }

    .blue-highlight {
      background-color: ${({ theme }) =>
        theme.colors.highlights.blue.background};
    }

    .orange-highlight {
      background-color: ${({ theme }) =>
        theme.colors.highlights.orange.background};
    }
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

export default memo(WysiwygViewer)
