import React, { useEffect } from 'react'
import styled from 'styled-components'

interface ToastProps {
  handleClose: (e) => any
  children: JSX.Element | string
  severity: string
  open: boolean
}

const SEVERITY = {
  success: 'success',
  error: 'error',
  warning: 'warning',
  info: 'info',
}

const Toast = (props: ToastProps): JSX.Element => {
  const { open, children, severity, handleClose } = props

  useEffect(() => {
    if (open) {
      setTimeout(handleClose, 6000)
    }
  }, [open])

  return (
    <StyledToast id={`toast-${severity}`} open={open} severity={severity}>
      <div>{children}</div>
      <div onClick={handleClose} className='toast__close'>
        ✕
      </div>
    </StyledToast>
  )
}

const StyledToast = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 10px 20px;
  font-family: ${props => props.theme.typography.fontFamily};
  font-size: 14px;
  min-width: 200px;
  max-width: 200px;
  z-index: ${props => props.theme.zIndex.snackbar};
  background-color: ${props => {
    switch (props.severity) {
      case SEVERITY.success:
        return props.theme.palette.success.main
      case SEVERITY.error:
        return props.theme.palette.error.main
      case SEVERITY.warning:
        return props.theme.palette.warning.main
      case SEVERITY.info:
      default:
        return props.theme.palette.info.main
    }
  }};
  color: ${props => {
    switch (props.severity) {
      case SEVERITY.success:
        return props.theme.palette.success.contrastText
      case SEVERITY.error:
        return props.theme.palette.error.contrastText
      case SEVERITY.warning:
        return props.theme.palette.warning.contrastText
      case SEVERITY.info:
      default:
        return props.theme.palette.info.contrastText
    }
  }};
  border-radius: ${props => props.theme.shape.borderRadius};
  opacity: ${props => (props.open ? '1' : '0')};
  transform: ${props => (props.open ? 'none' : 'scale(0.75, 0.75)')};
  transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    transform 150ms cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  justify-content: space-between;

  .toast__close {
    padding: 0 0 0 10px;
    font-size: 16px;
    cursor: pointer;
    transition: color 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

    &:hover {
      color: ${props => {
        switch (props.severity) {
          case SEVERITY.success:
            return props.theme.palette.success.dark
          case SEVERITY.error:
            return props.theme.palette.error.dark
          case SEVERITY.warning:
            return props.theme.palette.warning.dark
          case SEVERITY.info:
          default:
            return props.theme.palette.info.dark
        }
      }};
    }
  }

  ${props => props.theme.breakpointsMedia.mobile} {
    min-width: calc(100vw - 40px);
    max-width: calc(100vw - 40px);
    right: auto;
    left: 20px;
  }
`

Toast.defaultProps = {
  open: false,
  handleClose: () => {},
  severity: SEVERITY.info,
}

export default Toast
