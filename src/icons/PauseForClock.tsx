import React from 'react'
import Icon from '../components/Icon'

export const PauseForClock = (props: any) => {
  return (
    <Icon
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M6 3.33301H4.66667C4.29848 3.33301 4 3.63148 4 3.99967V11.9997C4 12.3679 4.29848 12.6663 4.66667 12.6663H6C6.36819 12.6663 6.66667 12.3679 6.66667 11.9997V3.99967C6.66667 3.63148 6.36819 3.33301 6 3.33301Z'
        fill='#FCC65A'
        stroke='#42210B'
      />
      <path
        fill='#FCC65A'
        d='M11.332 3.33301H9.9987C9.63051 3.33301 9.33203 3.63148 9.33203 3.99967V11.9997C9.33203 12.3679 9.63051 12.6663 9.9987 12.6663H11.332C11.7002 12.6663 11.9987 12.3679 11.9987 11.9997V3.99967C11.9987 3.63148 11.7002 3.33301 11.332 3.33301Z'
        stroke='#42210B'
      />
    </Icon>
  )
}

export default PauseForClock
