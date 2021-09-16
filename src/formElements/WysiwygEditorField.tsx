import React from 'react'
import * as R from 'ramda'
import { getHeadErrorOrEmptyObj } from '../utils/form'
import { WysiwygEditor } from '../components'

interface WysiwygEditorFieldProps {
  name: string
  t: (key: string, options: any) => string
  validate: (name: string, v: any) => any
  id: string
  onChange: (name: string, value: any) => any
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
  glossaryDefinitions?: {
    id: string
    word: string
    content: string
  }[]
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
    glossaryDefinitions,
    initialValue
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
      glossaryDefinitions={glossaryDefinitions}
      initialValue={initialValue}
    />
  )
}

export default WysiwygEditorField