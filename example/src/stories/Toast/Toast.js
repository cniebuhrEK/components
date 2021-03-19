import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Toast as ToastComponent } from 'components'

/**
 * Primary UI component for user interaction
 */
export const Toast = props => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)

  return (
    <>
      <div onClick={handleOpen}>Click here to open the toast</div>
      <ToastComponent
        open={isOpen || props.open}
        handleClose={handleClose}
        severity={props.severity}
      >
        {props.children}
      </ToastComponent>
    </>
  );
};

Toast.propTypes = {
  /**
   * defines if toast is visible or not
   */
  open: PropTypes.bool,
  /**
   * determines the color of the toast
   */
  severity: PropTypes.oneOf(['success', 'error', 'warning', 'info']),
  /**
   * triggers close of the toast
   */
  handleClose: PropTypes.func,
  /**
   * Toast content
   */
  children: PropTypes.string,
};

Toast.defaultProps = {
  severity: 'info',
};

