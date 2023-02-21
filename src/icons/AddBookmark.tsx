import React from 'react'
import Icon from '../components/Icon'

export const AddBookmark = props => {
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
        <path d='M558.507 853.333c5.12 30.72 15.787 59.307 30.72 85.333h-333.227c-47.36 0-85.333-37.973-85.333-85.333v-682.667c0-22.632 8.99-44.337 24.994-60.34s37.708-24.994 60.34-24.994h512c22.63 0 44.335 8.99 60.339 24.994s24.994 37.708 24.994 60.34v387.84c-14.080-2.133-28.16-3.84-42.667-3.84s-28.587 1.707-42.667 3.84v-387.84h-213.333v341.333l-106.667-96-106.667 96v-341.333h-85.333v682.667h302.507z' />
        <path d='M853.333 768h128v85.333h-128v128h-85.333v-128h-128v-85.333h128v-128h85.333v128z' />
      </g>
    </Icon>
  )
}

export default AddBookmark
