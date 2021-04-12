import React from 'react'
import ReactModal from 'react-modal'
import styled from 'styled-components'

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
      <div onClick={handleClose} className='modal__title'>
        {title}
      </div>
      <div onClick={handleClose} className='modal__close'>
        ✕
      </div>
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
  portalClassName: 'Portal',
})`
  & .Overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1000001;
    width: 100%;
    height: 100%;
    background: ${props => props.theme.palette.overlay};
    overflow-y: auto;
    padding: 40px 0;
    text-align: center;
    transition: opacity 0.2s
      ${props => props.theme.transitions.easing.easeInOut} 0s;

    &[class*='--after-open'] {
      opacity: 1;
    }

    &[class*='--before-close'] {
      opacity: 0;
    }
  }

  & .Modal {
    font-family: ${props => props.theme.typography.fontFamily};
    text-align: left;
    position: relative;
    display: inline-block;
    padding: 64px 72px;
    background: ${props => props.theme.palette.biege};
    box-shadow: ${props => props.theme.shadows.beigeShadow};
    color: ${props => props.theme.palette.brown01};
    border-radius: 3px;
    outline: 0;
    min-width: 500px;
    margin-top: 100px;
    font-size: ${props => props.theme.typography.fontSizeSmall};
    font-weight: 400;

    .modal__close {
      position: absolute;
      top: 24px;
      right: 24px;
      cursor: pointer;
      color: ${props => props.theme.palette.grey07};
      transition: color 0.2s
        ${props => props.theme.transitions.easing.easeInOut} 0s;

      &:hover {
        color: ${props => props.theme.palette.brown01};
      }
    }

    .modal__title {
      color: ${props => props.theme.palette.brown01};
      font-size: 24px;
      font-weight: 600;
      margin-bottom: 24px;
    }
  }
`
