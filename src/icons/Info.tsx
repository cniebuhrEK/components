import React from 'react'
import Icon from '../components/Icon'

export const Info = props => {
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
        <path d='M512 448h-35.2c-16 0-28.8 12.8-28.8 28.8 0 9.6 6.4 22.4 16 25.6s16 16 16 25.6v112c0 19.2 12.8 32 32 32s32-12.8 32-32v-160c0-19.2-12.8-32-32-32z' />
        <path d='M896 0h-768c-70.4 0-128 57.6-128 128v768c0 70.4 57.6 128 128 128h768c70.4 0 128-57.6 128-128v-768c0-70.4-57.6-128-128-128zM512 832c-176 0-320-144-320-320s144-320 320-320 320 144 320 320-144 320-320 320z' />
        <path d='M544 384c0 17.673-14.327 32-32 32s-32-14.327-32-32c0-17.673 14.327-32 32-32s32 14.327 32 32z' />
      </g>
    </Icon>
  )
}

export default Info
