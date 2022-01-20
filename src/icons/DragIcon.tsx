import React from 'react'
import Icon from '../components/Icon'

export const DragIcon = props => {
  return (
    <Icon
      width='1em'
      height='1em'
      viewBox='0 0 10 14'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g>
        <path
          d='M9.3,14H6v-3.3h3.3V14z M4,14H0.7v-3.3H4V14z M9.3,8.7H6V5.3h3.3V8.7z M4,8.7H0.7V5.3H4V8.7z M9.3,3.3H6V0h3.3
		V3.3z M4,3.3H0.7V0H4V3.3z'
        />
      </g>
    </Icon>
  )
}

export default DragIcon
