import React from 'react'
import Icon from '../components/Icon'

export const Success = props => {
  return (
    <Icon
      width='1em'
      height='1em'
      viewBox='0 0 1024 1024'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      {...props}
    >
      <g>
        <path d='M636.8 396.8l-156.8 185.6-92.8-92.8c-12.8-12.8-32-12.8-44.8 0s-12.8 32 0 44.8l112 112c12.8 12.8 35.2 12.8 48 0l182.4-208c9.6-12.8 9.6-32 0-41.6-16-16-35.2-12.8-48 0z' />
        <path d='M896 0h-768c-70.4 0-128 57.6-128 128v768c0 70.4 57.6 128 128 128h768c70.4 0 128-57.6 128-128v-768c0-70.4-57.6-128-128-128zM512 832c-176 0-320-144-320-320s144-320 320-320 320 144 320 320-144 320-320 320z' />
      </g>
    </Icon>
  )
}

export default Success
