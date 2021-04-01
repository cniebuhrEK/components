import React, { useState } from 'react'

import { ExamNavRight } from './styles'
import ExamIconNavigation from '../../../examIcons/Navigation'
import NavigationModal, {
  // eslint-disable-next-line no-unused-vars
  NavigationItemProps
} from '../Modal/variants/NavigationModal'

interface NavigationButtonProps {
  items: NavigationItemProps[]
}

const NavigationButton = ({
  items = []
}: NavigationButtonProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)

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
