import React, { memo } from 'react'

import 'quill/dist/quill.snow.css'

import WysiwygViewerEditor from './WysiwygViewerEditor'
import katex from 'katex'
import 'katex/dist/katex.min.css'
import { ModalWysiwygPreview } from './ModalWysiwygPreview'
// @ts-ignore
window.katex = katex
interface TextEditorProps {
  id: string
  bookContentId?: string
  markedPhrase?: string
  value: any
  withHighlights?: boolean
  withYoursHighlights?: boolean
  getPhraseDetails?: (e: any) => void
  redirectHandler?: (e: any) => void
  onHighlightChange?: (e) => void
  onSelectionChange?: (text, range, quill) => void
}

const WysiwygViewer = (props: TextEditorProps): JSX.Element => {
  const {
    id,
    value,
    withHighlights,
    withYoursHighlights,
    onHighlightChange,
    onSelectionChange,
    markedPhrase
  } = props
  return (
    <React.Fragment>
      <WysiwygViewerEditor
        id={id}
        value={value}
        withHighlights={withHighlights}
        withYoursHighlights={withYoursHighlights}
        onHighlightChange={onHighlightChange}
        onSelectionChange={onSelectionChange}
        markedPhrase={markedPhrase}
      />
      {/* @ts-ignore */}
      <ModalWysiwygPreview value={value} wysiwygId={id} />
    </React.Fragment>
  )
}

WysiwygViewer.defaultProps = {
  glossaryDefinitions: []
}

export default memo(WysiwygViewer)
