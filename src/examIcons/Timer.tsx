import React from 'react'
import Icon from '../components/Icon'

export const Timer = props => {
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
        <path d='M192 32v0zM192 60v0zM192 4v0zM96-64v0zM124-64v0zM68-64v0zM0-64l192 192zM0 128l192-192zM512 16c-196 0-360 130-414 308h-2c-30 0-54 22-54 52v144c0 30 24 52 54 52h4c52 178 218 308 414 308 236 0 432-194 432-432-2-238-196-432-434-432zM512 774c-180 0-326-146-326-326s146-326 326-326 326 146 326 326-146 326-326 326zM566 430v-230c0-30-24-54-54-54s-54 24-54 54v252c0 4 2 6 2 8v2c0 4 2 6 2 8 0 0 0 2 2 2 2 2 4 4 4 6v2l132 172c10 14 26 22 42 22 12 0 22-4 32-12 24-18 28-50 10-74z' />
      </g>
    </Icon>
  )
}

export default Timer
