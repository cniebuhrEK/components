import React from 'react'
import Icon from '../components/Icon'

export const Close = props => {
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
        <path d='M192 32v0zM192 60v0zM192 4v0zM96-64v0zM124-64v0zM68-64v0zM0-64l192 192zM0 128l192-192zM354 724h-148v-58l204-214-204-214v-66h140l166 174 166-174h140v66l-204 214 204 214v58h-150l-156-166zM982 50v796c0 24-20 44-44 44h-852c-24 0-44-20-44-44v-796c0-24 20-42 44-42h852c24 0 44 18 44 42zM878 110h-732v676h732v-676z' />
      </g>
    </Icon>
  )
}

export default Close
