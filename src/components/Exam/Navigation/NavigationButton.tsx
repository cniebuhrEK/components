import React, { useEffect, useState } from 'react'

import { ExamNavRight } from './styles'
import ExamIconNavigation from '../../../examIcons/Navigation'
import NavigationModal, {
  // eslint-disable-next-line no-unused-vars
  NavigationItemProps
} from '../Modal/variants/NavigationModal'
import { CHECK_SHORTCUT } from '../../../utils/shortcuts'

interface NavigationButtonProps {
  items: NavigationItemProps[]
}

const NavigationButton = ({
  items = []
}: NavigationButtonProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)

  const handleKeyboardShortcut = e => {
    if (CHECK_SHORTCUT(e).altV) {
      handleOpen()
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyboardShortcut)

    return () => {
      document.removeEventListener('keydown', handleKeyboardShortcut)
    }
  }, [])

  return (
    <div>
      <ExamNavRight onClick={handleOpen} id='navigation-btn'>
        <ExamIconNavigation />
        <div>
          Na<span className='underline'>v</span>igation
        </div>
      </ExamNavRight>
      <NavigationModal handleClose={handleClose} open={isOpen} items={items} />
    </div>
  )
}

export default NavigationButton
