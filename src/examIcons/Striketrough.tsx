import React from 'react'
import Icon from '../components/Icon'

export const Striketrough = props => {
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
        <path d='M192 32v0zM192 60v0zM192 4v0zM96-64v0zM124-64v0zM68-64v0zM0-64l192 192zM0 128l192-192zM900 184l-164-152c-14-14-36-22-56-22-22 0-44 10-60 26l-506 544c-6 6-8 14-8 22l16 226c2 14 14 26 28 26h226c8 0 16-2 20-8l508-544c32-34 30-86-4-118zM538 246l164 152-262 280-164-152zM354 772h-154l-10-154 30-32 166 152zM758 340l-164-154 86-94 164 152z' />
      </g>
    </Icon>
  )
}

export default Striketrough
