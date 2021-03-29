import React from 'react'
import Icon from '../components/Icon'

export const Incomplete = props => {
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
        <path d='M192 32v0zM192 60v0zM192 4v0zM96-64v0zM124-64v0zM68-64v0zM0-64l192 192zM0 128l192-192zM854 656c0 14-6 28-16 40l-78 78c-12 10-24 16-40 16-14 0-28-6-40-16l-168-170-168 170c-12 10-24 16-40 16s-28-6-40-16l-78-78c-10-12-16-24-16-40 0-14 6-28 16-40l170-168-170-168c-10-12-16-24-16-40s6-28 16-40l78-78c12-10 24-16 40-16s28 6 40 16l168 170 168-170c12-10 24-16 40-16 14 0 28 6 40 16l78 78c10 12 16 24 16 40s-6 28-16 40l-170 168 170 168c10 12 16 26 16 40z' />
      </g>
    </Icon>
  )
}

export default Incomplete
