import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { EndExamModal as ModalComponent } from 'build'

/**
 * Primary UI component for user interaction
 */
export const EndExamModal = props => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)

  return (
    <>
      <div onClick={handleOpen}>Click here to open the modal</div>
      <ModalComponent
        open={isOpen || props.open}
        handleClose={handleClose}
      />
    </>
  );
};

EndExamModal.propTypes = {
  /**
   * defines if toast is visible or not
   */
  open: PropTypes.bool,
  /**
   * triggers close of the modal
   */
  handleClose: PropTypes.func
};

EndExamModal.defaultProps = {};

