import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { ResponseRequiredModal as ModalComponent } from 'components'

/**
 * Primary UI component for user interaction
 */
export const ResponseRequiredModal = props => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)

  return (
    <>
      <div onClick={handleOpen}>Click here to open the modal</div>
      <ModalComponent open={isOpen || props.open} handleClose={handleClose} />
    </>
  )
}

ResponseRequiredModal.propTypes = {
  /**
   * defines if toast is visible or not
   */
  open: PropTypes.bool,
  /**
   * triggers close of the modal
   */
  handleClose: PropTypes.func
}

ResponseRequiredModal.defaultProps = {}
