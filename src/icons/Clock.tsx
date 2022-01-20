import React from 'react'
import Icon from '../components/Icon'

export const Clock = (props: any) => {
  return (
    <Icon
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M12 20C15.866 20 19 16.866 19 13C19 9.13401 15.866 6 12 6C8.13401 6 5 9.13401 5 13C5 16.866 8.13401 20 12 20Z'
        stroke='#8C4618'
      />
      <path d='M12 10V13H14' stroke='#8C4618' />
      <path d='M7 4L4.25 6' stroke='#8C4618' />
      <path d='M17 4L19.75 6' stroke='#8C4618' />
    </Icon>
  )
}

export default Clock
