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
        <path d='M192 32v0zM192 60v0zM192 4v0zM96-64v0zM124-64v0zM68-64v0zM0-64l192 192zM0 128l192-192zM600 472l-254 252c-8 10-20 14-34 14s-26-4-36-14l-28-28c-10-10-16-22-16-36s6-26 16-34l112-114h-272c-14 0-24-6-32-14-10-10-14-22-14-36v-50c0-14 4-26 14-36 8-10 18-14 32-14h274l-114-114c-10-10-16-20-16-34s6-26 16-36l28-28c10-10 22-16 36-16s26 6 34 16l254 252c10 8 14 20 14 36 0 12-4 24-14 34zM826 82h-268c-50 0-90 40-90 90l116 112v-86h216v500h-206v-96l-116 116v6c0 50 40 90 90 90h258c50 0 92-40 92-90v-552c0-50-42-90-92-90z' />
      </g>
    </Icon>
  )
}

export default Incomplete
