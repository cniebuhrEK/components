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
    // background: ${props => props.theme.palette.common.gray100};
    overflow-y: auto;
    padding: 40px 0;
    text-align: center;
    transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1) 0s;

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
    padding: 16px;
    background: ${props => props.theme.palette.background.paper};
    border-radius: 3px;
    outline: 0;
    max-width: 500px;
    width: 500px;
    margin-top: 100px;
    font-size: 14px;
    font-weight: 400;

    .modal__close {
      position: absolute;
      top: 16px;
      right: 16px;
      cursor: pointer;
      color: ${props => props.theme.palette.common.gray400};
      transition: color 0.2s cubic-bezier(0.4, 0, 0.2, 1) 0s;

      &:hover {
        color: ${props => props.theme.palette.common.gray600};
      }
    }

    .modal__title {
      font-size: 17px;
      font-weight: 700;
      margin-bottom: 16px;
    }
  }
`
