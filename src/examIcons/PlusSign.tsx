import React from 'react'
import Icon from '../components/Icon'

export const PlusSign = props => {
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
        <path d='M938 8h-852c-24 0-44 18-44 42v796c0 24 20 44 44 44h852c24 0 44-20 44-44v-796c0-24-20-42-44-42zM878 786h-732v-676h732v676zM228 514h214v216c0 12 10 22 22 22h94c12 0 22-10 22-22v-216h214c12 0 22-10 22-22v-96c0-10-10-20-22-20h-212v-212c0-12-10-22-22-22h-94c-12 0-22 10-22 22v212h-216c-12 0-22 10-22 20v96c0 12 10 22 22 22z' />
      </g>
    </Icon>
  )
}

export default PlusSign
