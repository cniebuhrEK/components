// Toast/Toast.tsx - Toast component

import React from 'react'
import styled from 'styled-components'

import Success from '../../icons/Success'
import Info from '../../icons/Info'
import Warning from '../../icons/Warning'
import Close from '../../icons/Close'

interface ToastProps {
  handleClose: (e: any) => any
  children: JSX.Element | string
  severity: 'success' | 'error' | 'warning' | 'info'
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

  React.useEffect(() => {
    if (open) {
      setTimeout(handleClose, 8000)
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
    <Container open={open}>
      <StyledToast id={`toast-${severity}`} open={open} severity={severity}>
        <IconContainer severity={severity} open={open}>
          {getIconByType()}
        </IconContainer>
        <ChildrenContainer>{children}</ChildrenContainer>
        <CloseContainer onClick={handleClose}>
          <Close />
        </CloseContainer>
      </StyledToast>
    </Container>
  )
}

const IconContainer = styled.div`
  opacity: ${({ open }) => (open ? '1' : '0')};
  margin-right: 16px;
  display: flex;
  align-items: flex-start;
  font-size: 32px;
  color: ${({ severity, theme }) => {
    switch (severity) {
      case SEVERITY.success:
        return theme.colors.toast.success.font
      case SEVERITY.error:
        return theme.colors.toast.error.font
      case SEVERITY.warning:
        return theme.colors.toast.warning.font
      case SEVERITY.info:
      default:
        return theme.colors.toast.info.font
    }
  }};
`

const ChildrenContainer = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
`

const CloseContainer = styled.div`
  padding: 8px 0 0 10px;
  font-size: ${({ theme }) => theme.typography.fontSizeNormal};
  cursor: pointer;
  transition: color 225ms ${({ theme }) => theme.transitions.easing.easeInOut}
    0ms;

  &:hover {
    color: ${({ theme }) => theme.colors.main.tertinary600};
  }
`

const Container = styled.div`
  position: fixed;
  top: 60px;
  left: 20px;
  width: ${({ open }) => (open ? 'auto' : '0px')};
  display: inline-flex;
  justify-content: left;
  z-index: ${({ open, theme }) =>
    open ? theme.zIndex.snackbarToast : 'unset'};
`

const StyledToast = styled.div`
  padding: ${({ open }) => (open ? '4px 14px 4px 4px' : '0')};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: ${({ theme }) => theme.typography.fontSizeSmall};
  min-width: ${({ open }) => (open ? '300px' : '0px')};
  max-width: ${({ open }) => (open ? '350px' : '0px')};
  z-index: ${({ open, theme }) =>
    open ? theme.zIndex.snackbarToast : 'unset'};
  background-color: ${({ theme }) => theme.colors.backgrounds.main};
  border-width: ${({ open }) => (open ? '1px' : '0')};
  border-style: solid;
  border-color: ${({ severity, theme }) => {
    switch (severity) {
      case SEVERITY.success:
        return theme.colors.toast.success.border
      case SEVERITY.error:
        return theme.colors.toast.error.border
      case SEVERITY.warning:
        return theme.colors.toast.warning.border
      case SEVERITY.info:
      default:
        return theme.colors.toast.info.border
    }
  }};
  border-radius: ${({ theme }) => theme.shape.borderRadiusBig};
  opacity: ${({ open }) => (open ? '1' : '0')};
  transform: ${({ open }) => (open ? 'none' : 'scale(0.75, 0.75)')};
  transition: opacity 225ms ${({ theme }) => theme.transitions.easing.easeInOut}
      0ms,
    width 100ms ${({ theme }) => theme.transitions.easing.easeIn},
    transform 100ms ${({ theme }) => theme.transitions.easing.easeInOut};
  display: flex;
  justify-content: space-between;

  ${({ theme }) => theme.breakpointsMedia.mobile} {
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
