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
  fullscreen?: boolean
  title?: string
  titleIcon?: any
  hasBorder?: boolean
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
    fullscreen,
    animationIsLess500px,
    titleIcon,
    hasBorder,
    ...rest
  } = props

  return (
    <StyledReactModal
      contentElement={props => (
        <div {...props} onClick={e => e.stopPropagation()}>
          {!blank && (
            <React.Fragment>
              {titleIcon && <TitleIcon>{titleIcon}</TitleIcon>}
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
      fullscreen={fullscreen}
      animationIsLess500px={animationIsLess500px}
      hasBorder={hasBorder}
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
    height: ${({ fullscreen }) => (fullscreen ? '100vh' : '100%')};
    background: ${({ theme }) => theme.colors.modal.overlay};
    overflow-y: ${({ fullscreen }) => (fullscreen ? 'hidden' : 'auto')};
    overflow: ${({ fullscreen }) => (fullscreen ? 'hidden' : 'auto')};
    ::-webkit-scrollbar {
      background: transparent;
    } /* Chrome/Safari/Webkit */
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE 10+ */
    padding: ${({ fullscreen }) => (fullscreen ? '0' : '40px 0')};
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
    padding: ${({ blank, fullscreen }) => {
      switch (true) {
        case blank:
          return '24px 16px'
        case fullscreen:
          return '8px'
        default:
          return '48px 20px'
      }
    }};
    background: ${({ theme }) => theme.colors.modal.background};
    box-shadow: ${({ theme }) => theme.shadows.mainShadow};
    border-radius: 3px;
    border: ${({ theme, hasBorder }) =>
      hasBorder ? `1px solid ${theme.colors.main.primary500}` : 'none'};
    outline: 0;
    min-width: ${({ animationIsLess500px, fullscreen }) => {
      switch (true) {
        case animationIsLess500px:
          return 'unset'
        case fullscreen:
          return '100vw'
        default:
          return '500px'
      }
    }};
    min-height: ${({ fullscreen }) => {
      switch (true) {
        case fullscreen:
          return '100vh'
        default:
          return 'unset'
      }
    }};
    height: ${({ fullscreen }) => {
      switch (true) {
        case fullscreen:
          return '100vh'
        default:
          return 'unset'
      }
    }};
    overflow: ${({ fullscreen }) => {
      switch (true) {
        case fullscreen:
          return 'auto'
        default:
          return 'unset'
      }
    }};
    box-sizing: border-box;
    margin-top: ${({ fullscreen }) => (fullscreen ? '0' : '100px')};
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
const TitleIcon = styled.div``
