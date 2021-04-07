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
        <path d='M512 624v0c-16 0-28.8 12.8-28.8 28.8s12.8 28.8 28.8 28.8v0c16 0 28.8-12.8 28.8-28.8s-12.8-28.8-28.8-28.8z' />
        <path d='M512 364.8c-16 0-28.8 12.8-28.8 28.8v147.2c0 16 12.8 28.8 28.8 28.8s28.8-12.8 28.8-28.8v-147.2c0-16-12.8-28.8-28.8-28.8z' />
        <path d='M896 0h-768c-70.4 0-128 57.6-128 128v768c0 70.4 57.6 128 128 128h768c70.4 0 128-57.6 128-128v-768c0-70.4-57.6-128-128-128zM720 736h-416c-48 0-80-54.4-54.4-96l208-355.2c25.6-41.6 86.4-41.6 108.8 0l208 355.2c25.6 41.6-6.4 96-54.4 96z' />
      </g>
    </Icon>
  )
}

export default Info
