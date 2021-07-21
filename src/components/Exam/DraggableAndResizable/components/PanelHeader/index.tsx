import React from 'react'
import IconClose from '../../../../../examIcons/Close'

const PanelHeader = ({ onDrag, title, handleClose }) => {
  const [mouseDown, setMouseDown] = React.useState(false)

  React.useEffect(() => {
    const handleMouseUp = () => setMouseDown(false)

    window.addEventListener('mouseup', handleMouseUp)

    return () => {
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [])

  React.useEffect(() => {
    const handleMouseMove = (e: any) => onDrag(e.movementX, e.movementY)

    if (mouseDown) {
      window.addEventListener('mousemove', handleMouseMove)
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [mouseDown, onDrag])

  const handleMouseDown = () => setMouseDown(true)

  return (
    <div className='panel__header' onMouseDown={handleMouseDown}>
      {title}
      <div
        id='exam-modal-close-btn'
        onClick={handleClose}
        className='panel__close'
      >
        <IconClose />
      </div>
    </div>
  )
}

export default PanelHeader
