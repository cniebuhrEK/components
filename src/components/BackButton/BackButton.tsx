import React from 'react'
import { Button } from '../Button'
import ArrowLeft from '../../examIcons/ArrowLeft'

interface BackButtonProps {
  onClick?: (e: any) => void
  children?: JSX.Element | string
  disabled?: boolean
}

export const BackButton = ({
  children,
  onClick,
  disabled
}: BackButtonProps): JSX.Element => {
  return (
    <Button
      color='tertiary'
      variant='contained'
      onClick={onClick}
      disabled={disabled}
      size='small'
      startIcon={<ArrowLeft />}
    >
      {children}
    </Button>
  )
}

export default BackButton
