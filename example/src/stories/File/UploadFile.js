import React from 'react'
import PropTypes from 'prop-types'

import { UploadFile as UploadFileComponent } from 'components'

export const UploadFile = props => {
  return <UploadFileComponent {...props} />
}

UploadFile.propTypes = {
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  reset: PropTypes.bool,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  required: PropTypes.bool,
  error: PropTypes.bool,
  errorText: PropTypes.string
}

UploadFile.defaultProps = {
  disabled: false,
  onChange: () => {},
  reset: false,
  placeholder: 'Choose file to upload',
  id: 'file-id',
  label: 'Label',
  required: false,
  error: false,
  errorText: 'required field'
}
