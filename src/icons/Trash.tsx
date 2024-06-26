import React from 'react'
import Icon from '../components/Icon'

export const Trash = props => {
  return (
    <Icon
      width='1em'
      height='1em'
      viewBox='0 0 16 16'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g>
        <path d='M10.334 2.66667H12.0007C12.3673 2.66667 12.6673 2.96667 12.6673 3.33333C12.6673 3.7 12.3673 4 12.0007 4H4.00065C3.63398 4 3.33398 3.7 3.33398 3.33333C3.33398 2.96667 3.63398 2.66667 4.00065 2.66667H5.66732L6.14065 2.19333C6.26065 2.07333 6.43398 2 6.60732 2H9.39398C9.56732 2 9.74065 2.07333 9.86065 2.19333L10.334 2.66667ZM5.33398 14C4.60065 14 4.00065 13.4 4.00065 12.6667V4.66667H12.0007V12.6667C12.0007 13.4 11.4007 14 10.6673 14H5.33398Z' />
      </g>
    </Icon>
  )
}

export default Trash
