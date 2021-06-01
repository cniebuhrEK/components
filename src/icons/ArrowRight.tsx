import React from 'react'
import Icon from '../components/Icon'

export const ArrowDown = props => {
  return (
    <Icon
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g>
        <path d='M0 0h24v24H0V0z' fill='none' />
        <path d='M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z' />
      </g>
    </Icon>
  )
}

export default ArrowDown
