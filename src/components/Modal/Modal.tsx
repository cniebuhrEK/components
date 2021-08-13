// Modal/Modal.tsx - Modal component

import React from 'react'
import ReactModal from 'react-modal'
import styled from 'styled-components'
import CloseIcon from '../../icons/Close'

interface ReactModalProps {
  children: JSX.Element
  handleClose: () => void
  open: boolean
  title: string
  [x: string]: any
}

const Modal = ({
  children,
  handleClose,
  open,
  title,
  ...rest
}: ReactModalProps): JSX.Element => {
  return (
    <StyledReactModal onRequestClose={handleClose} isOpen={open} {...rest}>
      <Title onClick={handleClose}>{title}</Title>
      <Close onClick={handleClose}>
        <CloseIcon />
      </Close>
      {children}
    </StyledReactModal>
  )
}

export default Modal

export function ReactModalAdapter({
  className,
  portalClassName,
  modalClassName,
  overlayClassName,
  ...props
}) {
  return (
    <ReactModal
      appElement={document.getElementById('root')}
      className={modalClassName}
      portalClassName={className}
      overlayClassName={overlayClassName}
      {...props}
    />
  )
}

export const StyledReactModal = styled(ReactModalAdapter).attrs({
  overlayClassName: 'Overlay',
  modalClassName: 'Modal',
  portalClassName: 'Portal'
})`
  & .Overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: ${({ theme }) => theme.zIndex.modal};
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.palette.overlay};
    overflow-y: auto;
    padding: 40px 0;
    text-align: center;
    transition: opacity 0.2s
      ${({ theme }) => theme.transitions.easing.easeInOut} 0s;

    &[class*='--after-open'] {
      opacity: 1;
    }

    &[class*='--before-close'] {
      opacity: 0;
    }

    &::before {
      content: '';
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: 100%;
      backdrop-filter: blur(2px);
      z-index: ${({ theme }) => theme.zIndex.modal};
    }
  }

  & .Modal {
    z-index: ${({ theme }) => theme.zIndex.modal + 10};
    font-family: ${({ theme }) => theme.typography.fontFamily};
    text-align: left;
    position: relative;
    display: inline-block;
    padding: 64px 72px;
    background: ${({ theme }) => theme.palette.biege};
    box-shadow: ${({ theme }) => theme.shadows.beigeShadow};
    color: ${({ theme }) => theme.palette.brown01};
    border-radius: 3px;
    outline: 0;
    min-width: 500px;
    margin-top: 100px;
    font-size: ${({ theme }) => theme.typography.fontSizeSmall};
    font-weight: 400;
  }
`

const Close = styled.div`
  position: absolute;
  top: 24px;
  right: 24px;
  cursor: pointer;
  color: ${({ theme }) => theme.palette.darkblue01};
  transition: color 0.2s ${({ theme }) => theme.transitions.easing.easeInOut} 0s;
`
const Title = styled.div`
  color: ${({ theme }) => theme.palette.brown01};
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 24px;
`
