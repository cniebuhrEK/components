import React, { memo, useState } from 'react'
import { hasImg } from './utils'
import { propOr, any, propEq } from 'ramda'
import Modal from '../Modal/Modal'
// @ts-ignore
export const ModalWysiwygPreview = memo(({ value }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [src, setSrc] = useState('')
  const handleIsOpen = () => setIsOpen(!isOpen)

  const handleMouseDown = e => {
    const path = propOr([], 'path', e)

    const imagesFromDeltaObject = hasImg(value)

    imagesFromDeltaObject.forEach(imageFromDeltaObject => {
      const isClickedInsideSelf = any(propEq('alt', imageFromDeltaObject.alt))(
        path
      )
      if (isClickedInsideSelf) {
        setIsOpen(true)
        setSrc(imageFromDeltaObject.url)
      }
    })
  }
  React.useEffect(() => {
    document.addEventListener('mousedown', handleMouseDown)

    return () => {
      document.removeEventListener('mousedown', handleMouseDown)
    }
  }, [value])
  return (
    <Modal isOpen={isOpen} handleClose={handleIsOpen}>
      <img src={src} />
    </Modal>
  )
})
