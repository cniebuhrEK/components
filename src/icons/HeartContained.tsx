import React from 'react'
import Icon from '../components/Icon'

export const HeartContained = props => {
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
        <path
          fill='#000'
          d='M512 910.933l-61.867-56.32c-219.733-199.253-364.8-331.093-364.8-491.947 0-131.84 103.253-234.667 234.667-234.667 74.24 0 145.493 34.56 192 88.747 46.507-54.187 117.76-88.747 192-88.747 131.413 0 234.667 102.827 234.667 234.667 0 160.853-145.067 292.693-364.8 491.947l-61.867 56.32z'
        />
      </g>
    </Icon>
  )
}

export default HeartContained
