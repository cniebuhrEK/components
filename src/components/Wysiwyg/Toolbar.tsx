// Wysiwyg/Wysiwyg.tsx - Wysiwyg component

import React from 'react'
import AddGlossaryButton from './components/AddGlossaryButton'

import * as R from 'ramda'
import AddCustomImageButton from './components/AddCustomImageButton'
import AddAdminHighlightsButton from './components/AddAdminHighlightsButton'
// eslint-disable-next-line no-unused-vars
import { GlossaryPhrase, PaginationProps } from './components/SelectGlossary'
import ScanGlossaryButton from './components/ScanGlossaryButton'

interface ToolbarProps {
  editorInstance: any
  handleS3Upload?: (e: any) => void
  id: string
  handleScanGlossaryList?: (e: any) => void
  handleFetchGlossaryList?: (e: any) => void
  handleCreateNew?: (e: any) => Promise<void>
  glossaryEntries?: GlossaryPhrase[]
  glossaryEntriesPagination?: PaginationProps
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
}

const Toolbar = (props: ToolbarProps): JSX.Element => {
  const {
    glossaryEntries,
    handleScanGlossaryList,
    handleFetchGlossaryList,
    glossaryEntriesPagination,
    editorInstance,
    handleS3Upload,
    handleCreateNew,
    id,
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
      glossary,
      clean,
      customImage,
      adminHighlights
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

  const hasCleanFormats = R.any(R.equals(true), [clean])

  const hasAdditionalFormats = R.any(R.equals(true), [
    glossary,
    customImage,
    adminHighlights
  ])

  const sizeFormats = hasSizeFormats && (
    <span className='ql-formats'>
      {size && (
        <select className='ql-size'>
          <option value='small'>Small</option>
          <option selected />
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

  const cleanFormats = hasCleanFormats && (
    <span className='ql-formats'>
      {clean && <button className='ql-clean' />}
    </span>
  )

  const formulaFormats = hasFormulaFormats && (
    <span className='ql-formats'>
      {formula && <button className='ql-formula' />}
    </span>
  )

  const actionPlaceholder = () => {}
  const S3Handler = handleS3Upload || actionPlaceholder

  const additionalFormats = hasAdditionalFormats && (
    <span className='ql-formats'>
      {customImage && (
        <AddCustomImageButton
          editorInstance={editorInstance}
          id={id}
          handleS3Upload={S3Handler}
        />
      )}
      {adminHighlights && (
        <AddAdminHighlightsButton editorInstance={editorInstance} />
      )}
      {glossary && (
        <AddGlossaryButton
          glossaryEntries={glossaryEntries}
          handleCreateNew={handleCreateNew}
          handleFetchGlossaryList={handleFetchGlossaryList}
          editorInstance={editorInstance}
          glossaryEntriesPagination={glossaryEntriesPagination}
        />
      )}
      {glossary && (
        <ScanGlossaryButton
          handleScanGlossaryList={handleScanGlossaryList}
          editorInstance={editorInstance}
        />
      )}
    </span>
  )

  return (
    <div id={`toolbar-${id}`}>
      {sizeFormats}
      {inlineFormats}
      {sectionFormats}
      {textFormats}
      {formulaFormats}
      {cleanFormats}
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
