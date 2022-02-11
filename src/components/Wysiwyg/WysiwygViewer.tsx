import React, { memo } from 'react'

import 'quill/dist/quill.snow.css'

import GlossaryTooltips from './components/GlossaryTooltips'
import WysiwygViewerEditor from './WysiwygViewerEditor'
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
  return (
    <React.Fragment>
      <WysiwygViewerEditor
        id={id}
        value={value}
        withHighlights={withHighlights}
        withYoursHighlights={withYoursHighlights}
        onHighlightChange={onHighlightChange}
      />
      {getPhraseDetails && (
        <GlossaryTooltips
          deltaObject={value}
          bookContentId={bookContentId}
          getPhraseDetails={getPhraseDetails}
          redirectHandler={redirectHandler}
        />
      )}
      {/* @ts-ignore */}
      <ModalWysiwygPreview value={value} />
    </React.Fragment>
  )
}

WysiwygViewer.defaultProps = {
  glossaryDefinitions: []
}

export default memo(WysiwygViewer)
