import React from 'react'
import Icon from '../components/Icon'

export const ChartIcon = props => {
  return (
    <Icon
      width='1em'
      height='1em'
      viewBox='0 0 1024 1024'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g>
        <path d='M0 393.75h236.308v630.154h-236.308v-630.154z' />
        <path d='M393.75 0h236.308v1024h-236.308v-1024z' />
        <path d='M787.75 630.25h236.308v393.846h-236.308v-393.846z' />
      </g>
    </Icon>
  )
}

export default ChartIcon
