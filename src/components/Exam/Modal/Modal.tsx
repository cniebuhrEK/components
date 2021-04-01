import React from 'react'
import styled from 'styled-components'

import Modal from 'react-modal-resizable-draggable'
import IconClose from '../../../examIcons/Close'

import cx from 'classnames'

interface ExamModalProps {
  children: JSX.Element
  handleClose: () => void
  open: boolean
  title: JSX.Element | string
  showConfirmButton?: boolean
  confirmButtonName?: string
  handleConfirm?: () => void
  showCancelButton?: boolean
  disableCloseOnOutsideClick?: boolean
  cancelButtonName?: string
  handleCancel?: () => void
  [x: string]: any
}

const ExamModal = ({
  children,
  handleClose,
  open,
  title,
  showConfirmButton,
  confirmButtonName,
  showCancelButton,
  cancelButtonName,
  handleConfirm,
  handleCancel,
  disableCloseOnOutsideClick,
  ...rest
}: ExamModalProps): JSX.Element => {
  const containerClasses = cx({
    '--disable-resize': rest.disableResize,
    '--disable-close': disableCloseOnOutsideClick
  })

  return (
    <ExamModalContainer className={containerClasses}>
      <Modal
        onRequestClose={handleClose}
        isOpen={open}
        initWidth={500}
        initHeight={300}
        disableResize
        {...rest}
      >
        <div onClick={handleClose} className='modal__title'>
          {title}
          <div
            id='exam-modal-close-btn'
            onClick={handleClose}
            className='modal__close'
          >
            <IconClose />
          </div>
        </div>
        <div className='modal__content'>
          {children}
          <div className='modal_buttons-container'>
            {showConfirmButton && (
              <div
                className='modal__button'
                id='exam-modal-confirm-btn'
                onClick={handleConfirm}
              >
                {confirmButtonName}
              </div>
            )}
            {showCancelButton && (
              <div
                className='modal__button'
                id='exam-modal-cancel-btn'
                onClick={handleCancel}
              >
                {cancelButtonName}
              </div>
            )}
          </div>
        </div>
      </Modal>
    </ExamModalContainer>
  )
}

ExamModal.defaultProps = {
  showConfirmButton: false,
  confirmButtonName: 'Yes',
  showCancelButton: false,
  cancelButtonName: 'No'
}

export default ExamModal

export const ExamModalContainer = styled.div`
  .modal__title {
    background: ${props => props.theme.palette.primary.main};
    border-bottom: 1px solid
      ${props => props.theme.palette.primary.contrastText};
    height: 28px;
    padding: 0px 20px;
    display: flex;
    align-items: center;
    position: relative;
    font-size: 16px;
    font-weight: 600;

    svg {
      transform: translateY(3px);
    }
  }

  .modal_buttons-container {
    display: flex;
    align-items: center;
    justify-content: center;

    .modal__button + .modal__button {
      margin-left: 5px;
    }
  }

  .modal__button {
    color: ${props => props.theme.palette.primary.contrastText};
    border: 1px solid ${props => props.theme.palette.primary.contrastText};
    padding: 3px 10px;
    cursor: pointer;
    font-size: 12pt;
    text-decoration: none;
    margin-top: 10px;

    &:first-letter {
      text-decoration: underline;
    }

    &:hover {
      color: ${props => props.theme.palette.secondary.main};
    }
  }

  .modal__close {
    position: absolute;
    top: 5px;
    right: 10px;
    cursor: pointer;
    color: ${props => props.theme.palette.primary.contrastText};
    font-size: 16px;

    &:hover {
      color: ${props => props.theme.palette.secondary.main};
    }
  }

  .modal__content {
    padding: 20px;
    font-size: 16px;
    height: calc(100% - 28px);
  }

  .flexible-modal {
    position: absolute;
    z-index: 1;
    border: 1px solid #000;
    background: ${props => props.theme.palette.primary.main};
    border-radius: 4px;
    color: ${props => props.theme.palette.primary.contrastText};
  }

  .flexible-modal-resizer {
    position: absolute;
    right: 0;
    bottom: 0;
    cursor: se-resize;
    border-left: solid 1px ${props => props.theme.palette.common.white};
    transform: rotate(45deg);
  }

  .flexible-modal-resizer::before {
    content: '';
    position: absolute;
    display: inline-block;
    bottom: 0;
    right: 0;
    width: 12px;
    height: 10px;
    border-left: solid 1px ${props => props.theme.palette.common.white};
    margin: 3px 0;
  }

  .flexible-modal-resizer::after {
    content: '';
    position: absolute;
    display: inline-block;
    bottom: 0;
    left: 0;
    width: 5px;
    height: 3px;
    border-right: solid 1px ${props => props.theme.palette.common.white};
    margin: 6px 0;
  }

  &.--disable-resize {
    .flexible-modal-resizer {
      display: none;
    }
  }

  .flexible-modal-mask {
    position: fixed;
    height: 100%;
    background: transparent;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  &.--disable-close {
    .flexible-modal-mask {
      position: static;
      height: 0;
    }
  }

  .flexible-modal-drag-area {
    background: transparent;
    height: 28px;
    width: calc(100% - 20px) !important;
    position: absolute;
    left: 0;
    top: 0;
    cursor: move;
  }
`
