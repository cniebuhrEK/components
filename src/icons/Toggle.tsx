import React from 'react'
import Icon from '../components/Icon'

export const Toggle = props => {
  return (
    <Icon
      width='1em'
      height='1em'
      viewBox='0 0 27 13'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g>
        <g>
          <circle cx='20.5' cy='6.5' r='4.5' />
        </g>
        <g>
          <path
            d='M20.5,13h-14C2.9,13,0,10.1,0,6.5S2.9,0,6.5,0h14C24.1,0,27,2.9,27,6.5S24.1,13,20.5,13z M6.5,1
			C3.5,1,1,3.5,1,6.5S3.5,12,6.5,12h14c3,0,5.5-2.5,5.5-5.5S23.5,1,20.5,1H6.5z'
          />
        </g>
      </g>
    </Icon>
  )
}

export default Toggle
