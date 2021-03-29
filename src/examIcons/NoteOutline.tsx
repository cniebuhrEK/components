import React from 'react'
import Icon from '../components/Icon'

export const NoteOutline = props => {
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
        <path d='M916 94v540c0 14-2 30-10 46s-16 30-26 38l-98 98c-8 10-22 18-40 26-16 8-32 10-46 10h-538c-14 0-26-6-36-14-10-10-16-22-16-36v-708c0-12 6-24 16-36 10-10 20-14 36-14h708c12 0 24 6 36 14 8 10 14 22 14 36zM702 586h156v-484h-692v692h484v-156c0-14 6-26 16-36 10-12 22-16 36-16zM854 642h-148v148c10-4 20-8 24-12l110-112c6-6 10-14 14-24z' />
      </g>
    </Icon>
  )
}

export default NoteOutline
