import React from 'react'
import Icon from '../components/Icon'

export const PlayInSquares = props => {
  return (
    <Icon
      width='1em'
      height='1em'
      viewBox='0 0 20 20'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g>
        <path d='M2 0H12V2H2V12H0V2C0 0.89 0.89 0 2 0ZM6 4H16V6H6V16H4V6C4 4.89 4.89 4 6 4ZM10 8H18C19.11 8 20 8.89 20 10V18C20 19.11 19.11 20 18 20H10C8.89 20 8 19.11 8 18V10C8 8.89 8.89 8 10 8ZM12 10V18L18 14L12 10Z' />
      </g>
    </Icon>
  )
}

export default PlayInSquares
