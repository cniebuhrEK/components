import React from 'react'
import * as R from 'ramda'
import { getHeadErrorOrEmptyObj } from '../utils/form'
import { WysiwygEditor } from '../components'

// eslint-disable-next-line no-unused-vars
import { GlossaryPhrase } from '../components/Wysiwyg/components/SelectGlossary'

interface WysiwygEditorFieldProps {
  name: string
  t: (key: string, options: any) => string
  validate: (name: string, v: any) => any
  id: string
  onChange: (name: string, value: any) => any
  handleS3Upload?: (e: any) => void
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
  getPhraseDetails?: (e: any) => void
  glossaryEntries?: GlossaryPhrase[]
  required?: boolean
  error?: boolean
  errorText?: string
  initialValue?: any
  label?: string | JSX.Element
}

// Form field for uploading files
export const WysiwygEditorField = (
  props: WysiwygEditorFieldProps
): JSX.Element => {
  const {
    name,
    id,
    onChange,
    validate,
    label,
    required,
    t,
    formats,
    glossaryEntries,
    handleFetchGlossaryList,
    getPhraseDetails,
    initialValue,
    handleS3Upload
  } = props

  // Indicator for whether the input is open or not
  const [touched, _setTouched] = React.useState(false)

  // Current value of the file field
  const [value, _setValue] = React.useState(null)

  // Validator state
  const [{ valid, error }, _validate] = React.useState({
    valid: true,
    error: {}
  })

  React.useEffect(() => {
    if (touched) {
      validate(name, (v: any) => {
        _validate({ valid: v.valid, error: getHeadErrorOrEmptyObj(v) })
      })
    }
  }, [value, touched])

  const handleChange = (newValue: any) => {
    _setTouched(true)
    _setValue(newValue)
    onChange(name, newValue)
  }

  const errorText = valid
    ? ''
    : t(R.propOr('', 'key', error), R.propOr({}, 'options', error))

  const hasError = !valid

  return (
    <WysiwygEditor
      label={label}
      required={required}
      error={hasError}
      errorText={errorText}
      id={id}
      onChange={handleChange}
      formats={formats}
      glossaryEntries={glossaryEntries}
      handleFetchGlossaryList={handleFetchGlossaryList}
      getPhraseDetails={getPhraseDetails}
      initialValue={initialValue}
      handleS3Upload={handleS3Upload}
    />
  )
}

export default WysiwygEditorField
