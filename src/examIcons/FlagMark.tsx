import React from 'react'
import Icon from '../components/Icon'

export const FlagMark = props => {
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
        <path d='M192 32v0zM192 60v0zM192 4v0zM96-64v0zM124-64v0zM68-64v0zM0-64l192 192zM0 128l192-192zM98 424l-54 6 38 38c6 8 176 184 352 158 104-16 120-54 112-108-4-20-2-20 8-28h4c44-20 164-8 240 4l54 336c2 14 16 24 30 22 2 0 4 0 6-2 10-4 16-16 14-28l-60-372v-6l-6-34-64-408c-2-14-16-24-30-22s-24 16-22 30l14 96c-4 2-22 8-68 8-6 0-14 0-22-2-72-2-168-6-222 56-26 28-32 64-36 96-6 30-10 58-28 76-52 48-202 78-260 84' />
      </g>
    </Icon>
  )
}

export default FlagMark
