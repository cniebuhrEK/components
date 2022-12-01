import React, { useEffect } from 'react'
import styled from 'styled-components'
import {
  addAdminHighlightsBlotToQuill,
  addGlossaryBlotToQuill,
  addImageBlotToQuill,
  addHighlightBlots,
  addFontColorBlots,
  addSearchPhraseBlotToQuill
} from './customBlots'
import Quill from 'quill'
import katex from 'katex'
import 'katex/dist/katex.min.css'
import 'quill/dist/quill.snow.css'

// @ts-ignore
window.katex = katex

export const QuillHtmlConverter = ({ value, callback }): JSX.Element => {
  const [quill, setQuill] = React.useState()
  const [quillHTML, setQuillHTML] = React.useState('')

  // useCallback instead of useRef is used to make sure the wrapper ref is always defined
  // as soon as the element is rendered on the page it will use this callback
  const wrapperRef = React.useCallback(wrapper => {
    addGlossaryBlotToQuill()
    addSearchPhraseBlotToQuill()
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
    if (quill) {
      // @ts-ignore
      quill.setContents(value)

      // @ts-ignore
      setQuillHTML(quill.container.innerHTML)
    }
    // @ts-ignore
  }, [quill, value])

  useEffect(() => {
    callback(quillHTML)
  }, [quillHTML])

  return (
    <Container>
      <Column>
        <div id='quill-html-converter' ref={wrapperRef} />
      </Column>
    </Container>
  )
}

export default QuillHtmlConverter

const Container = styled.div`
  display: flex;
`

const Column = styled.div`
  width: 50%;
`
