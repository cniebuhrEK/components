import React from 'react'
import Icon from '../components/Icon'

export const Pause = props => {
  return (
    <Icon
      width='1em'
      height='1em'
      viewBox='0 0 12 14'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M4 12C4 13.1 3.1 14 2 14C0.9 14 0 13.1 0 12V2C0 0.9 0.9 0 2 0C3.1 0 4 0.9 4 2V12ZM8 12V2C8 0.9 8.9 0 10 0C11.1 0 12 0.9 12 2V12C12 13.1 11.1 14 10 14C8.9 14 8 13.1 8 12Z'
        />
      </g>
    </Icon>
  )
}

export default Pause
