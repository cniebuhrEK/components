// Wysiwyg/Wysiwyg.tsx - Wysiwyg component

import React from 'react'
import AddGlossaryButton from './AddGlossaryButton'

import * as R from 'ramda'

interface ToolbarProps {
  editorInstance: any
  glossaryDefinitions?: {
    id: string
    word: string
    content: string
  }[]
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
  }
}

const Toolbar = (props: ToolbarProps): JSX.Element => {
  const {
    glossaryDefinitions,
    editorInstance,
    formats: {
      size,
      header,
      bold,
      italic,
      underline,
      strike,
      orderedList,
      bulletList,
      increaseIndent,
      decreaseIndent,
      align,
      scriptSuper,
      scriptSub,
      blockquote,
      direction,
      formula,
      glossary
    }
  } = props

  const hasSizeFormats = R.any(R.equals(true), [size, header])

  const hasInlineFormats = R.any(R.equals(true), [
    bold,
    italic,
    underline,
    strike
  ])

  const hasSectionFormats = R.any(R.equals(true), [
    orderedList,
    bulletList,
    increaseIndent,
    decreaseIndent,
    align,
    direction
  ])

  const hasTextFormats = R.any(R.equals(true), [
    scriptSuper,
    scriptSub,
    blockquote
  ])

  const hasFormulaFormats = R.any(R.equals(true), [formula])

  const hasAdditionalFormats = R.any(R.equals(true), [glossary])

  const sizeFormats = hasSizeFormats && (
    <span className='ql-formats'>
      {size && (
        <select className='ql-size'>
          <option value='small'>Small</option>
          <option value='normal' selected>
            Normal
          </option>
          <option value='large'>Large</option>
          <option value='huge'>Huge</option>
        </select>
      )}
      {header && (
        <React.Fragment>
          <button className='ql-header' value='1' />
          <button className='ql-header' value='2' />
        </React.Fragment>
      )}
    </span>
  )

  const inlineFormats = hasInlineFormats && (
    <span className='ql-formats'>
      {bold && <button className='ql-bold' />}
      {italic && <button className='ql-italic' />}
      {underline && <button className='ql-underline' />}
      {strike && <button className='ql-strike' />}
    </span>
  )

  const sectionFormats = hasSectionFormats && (
    <span className='ql-formats'>
      {orderedList && <button className='ql-list' value='ordered' />}
      {bulletList && <button className='ql-list' value='bullet' />}
      {increaseIndent && <button className='ql-indent' value='-1' />}
      {decreaseIndent && <button className='ql-indent' value='+1' />}
      {align && <select className='ql-align' />}
      {direction && <button className='ql-direction' value='rtl' />}
    </span>
  )

  const textFormats = hasTextFormats && (
    <span className='ql-formats'>
      {scriptSuper && <button className='ql-script' value='super' />}
      {scriptSub && <button className='ql-script' value='sub' />}
      {blockquote && <button className='ql-blockquote' />}
    </span>
  )

  const formulaFormats = hasFormulaFormats && (
    <span className='ql-formats'>
      {formula && <button className='ql-formula' />}
    </span>
  )

  const additionalFormats = hasAdditionalFormats && (
    <span className='ql-formats'>
      {glossary && (
        <AddGlossaryButton
          glossaryDefinitions={glossaryDefinitions}
          editorInstance={editorInstance}
        />
      )}
    </span>
  )

  return (
    <div id='toolbar'>
      {sizeFormats}
      {inlineFormats}
      {sectionFormats}
      {textFormats}
      {formulaFormats}
      {additionalFormats}
    </div>
  )
}

Toolbar.defaultProps = {
  formats: {
    size: false,
    header: false,
    direction: false,
    bold: false,
    italic: false,
    underline: false,
    strike: false,
    orderedList: false,
    bulletList: false,
    increaseIndent: false,
    decreaseIndent: false,
    align: false,
    scriptSuper: false,
    scriptSub: false,
    blockquote: false,
    formula: false,
    glossary: false
  }
}

export default Toolbar
