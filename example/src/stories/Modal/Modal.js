import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Modal as ModalComponent } from 'components'

/**
 * Primary UI component for user interaction
 */
export const Modal = props => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)

  return (
    <>
      <div onClick={handleOpen}>Click here to open the modal</div>
      <ModalComponent
        open={isOpen || props.open}
        handleClose={handleClose}
        title={props.title}
      >
        {props.children}
      </ModalComponent>
    </>
  );
};

Modal.propTypes = {
  /**
   * defines if toast is visible or not
   */
  open: PropTypes.bool,
  /**
   * triggers close of the modal
   */
  handleClose: PropTypes.func,
  /**
   * Modals title
   */
  title: PropTypes.string,
  /**
   * Modal content
   */
  children: PropTypes.string,
};

Modal.defaultProps = {
  title: 'Modal title'
};

