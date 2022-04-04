// Modal/Modal.tsx - Modal component

import React from 'react'
import ReactModal from 'react-modal'
import styled from 'styled-components'
import CloseIcon from '../../icons/Close'
import { isNotNilOrEmpty } from '../../utils/ramda'

interface ReactModalProps {
  children: JSX.Element
  handleClose: () => void
  open?: boolean
  blank?: boolean
  title?: string
  [x: string]: any
  animationIsLess500px?: boolean
}

const Modal = (props: ReactModalProps): JSX.Element => {
  const {
    children,
    handleClose,
    open,
    title,
    blank,
    animationIsLess500px,
    ...rest
  } = props

  return (
    <StyledReactModal
      contentElement={props => (
        <div {...props} onClick={e => e.stopPropagation()}>
          {!blank && (
            <React.Fragment>
              <Title isVisible={isNotNilOrEmpty(title)}>{title}</Title>
              <Close onClick={handleClose}>
                <CloseIcon />
              </Close>
            </React.Fragment>
          )}
          {children}
        </div>
      )}
      onRequestClose={handleClose}
      isOpen={open}
      blank={blank}
      animationIsLess500px={animationIsLess500px}
      {...rest}
    />
  )
}

Modal.defaultProps = {
  title: '',
  open: false
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
    background: ${({ theme }) => theme.colors.modal.overlay};
    overflow-y: auto;
    ::-webkit-scrollbar {
      background: transparent;
    } /* Chrome/Safari/Webkit */
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE 10+ */
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
    text-align: center;
    position: relative;
    display: inline-block;
    padding: 48px 20px;
    padding: ${({ blank }) => (blank ? '24px 16px' : '48px 20px')};
    background: ${({ theme }) => theme.colors.modal.background};
    box-shadow: ${({ theme }) => theme.shadows.mainShadow};
    border-radius: 3px;
    outline: 0;
    min-width: ${({ animationIsLess500px }) =>
      animationIsLess500px ? 'unset' : '500px'};
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
  transition: color 0.2s ${({ theme }) => theme.transitions.easing.easeInOut} 0s;
`
const Title = styled.div`
  color: ${({ theme }) => theme.colors.modal.heading};
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 24px;
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
`
