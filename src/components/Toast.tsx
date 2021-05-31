import React, { useEffect } from 'react'
import styled from 'styled-components'

import Success from '../icons/Success'
import Info from '../icons/Info'
import Warning from '../icons/Warning'
import Close from '../icons/Close'

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
  info: 'info'
}

const Toast = (props: ToastProps): JSX.Element => {
  const { open, children, severity, handleClose } = props

  useEffect(() => {
    if (open) {
      setTimeout(handleClose, 6000)
    }
  }, [open])

  const getIconByType = () => {
    switch (severity) {
      case SEVERITY.success:
        return <Success />
      case SEVERITY.info:
        return <Info />
      default:
        return <Warning />
    }
  }

  return (
    <StyledToast id={`toast-${severity}`} open={open} severity={severity}>
      <div className='toast__icon'>{getIconByType()}</div>
      <div className='toast__children'>{children}</div>
      <div onClick={handleClose} className='toast__close'>
        <Close />
      </div>
    </StyledToast>
  )
}

const StyledToast = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 4px 14px 4px 4px;
  font-family: ${props => props.theme.typography.fontFamily};
  font-size: ${props => props.theme.typography.fontSizeSmall};
  min-width: 300px;
  max-width: 350px;
  z-index: ${props => props.theme.zIndex.snackbar};
  background-color: ${props => props.theme.palette.biege};
  border-width: 1px;
  border-style: solid;
  border-color: ${props => {
    switch (props.severity) {
      case SEVERITY.success:
        return props.theme.palette.green10
      case SEVERITY.error:
        return props.theme.palette.red10
      case SEVERITY.warning:
        return props.theme.palette.orange10
      case SEVERITY.info:
      default:
        return props.theme.palette.grey09
    }
  }};
  color: ${props => props.theme.palette.brown01};
  border-radius: ${props => props.theme.shape.borderRadiusBig};
  opacity: ${props => (props.open ? '1' : '0')};
  transform: ${props => (props.open ? 'none' : 'scale(0.75, 0.75)')};
  transition: opacity 225ms ${props => props.theme.transitions.easing.easeInOut}
      0ms,
    transform 150ms ${props => props.theme.transitions.easing.easeInOut};
  display: flex;
  justify-content: space-between;

  .toast__icon {
    margin-right: 16px;
    display: flex;
    align-items: flex-start;
    font-size: 32px;
    color: ${props => {
      switch (props.severity) {
        case SEVERITY.success:
          return props.theme.palette.green05
        case SEVERITY.error:
          return props.theme.palette.red05
        case SEVERITY.warning:
          return props.theme.palette.orange04
        case SEVERITY.info:
        default:
          return props.theme.palette.brown01
      }
    }};
  }

  .toast__children {
    flex-grow: 1;
    display: flex;
    align-items: center;
  }

  .toast__close {
    padding: 8px 0 0 10px;
    font-size: ${props => props.theme.typography.fontSizeNormal};
    cursor: pointer;
    transition: color 225ms ${props => props.theme.transitions.easing.easeInOut}
      0ms;

    &:hover {
      color: ${props => props.theme.palette.brown01};
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
  severity: SEVERITY.info
}

export default Toast
