// Toast/Toast.stories.js - Toast story

import React from 'react'
import PropTypes from 'prop-types'

import Toast from './Toast'

/**
 * Primary UI component for user interaction
 */
export const ToastContainer = props => {
  const [isOpen, setIsOpen] = React.useState(false)

  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)

  return (
    <>
      <div onClick={handleOpen}>Click here to open the toast</div>
      <Toast
        open={isOpen || props.open}
        handleClose={handleClose}
        severity={props.severity}
      >
        {props.children}
      </Toast>
    </>
  )
}

ToastContainer.propTypes = {
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
  children: PropTypes.string
}

ToastContainer.defaultProps = {
  open: false,
  severity: 'info',
  handleClose: () => {},
  children: []
}

const Template = args => <Toast {...args}>{args.children}</Toast>

export const ToastNotification = Template.bind({})
ToastNotification.args = {
  children: 'Hello world!',
  severity: 'info'
}

export default {
  title: 'Atoms/Toast',
  component: Toast
}
