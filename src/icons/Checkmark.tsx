import React from 'react'
import Icon from '../components/Icon'

export const Checkmark = props => {
  return (
    <Icon
      width='1em'
      height='1em'
      viewBox='0 0 16 16'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g>
        <path d='M7.33724 12.5439C6.7025 13.152 5.67259 13.152 5.03816 12.5439L1.47605 9.13113C0.841316 8.5233 0.841316 7.53657 1.47605 6.92874C2.11048 6.32062 3.14039 6.32062 3.77513 6.92874L5.89744 8.96179C6.05766 9.11499 6.31774 9.11499 6.47826 8.96179L12.2249 3.45609C12.8593 2.84797 13.8892 2.84797 14.5239 3.45609C14.8288 3.74812 15 4.14434 15 4.55729C15 4.97024 14.8288 5.36646 14.5239 5.65849L7.33724 12.5439Z' />
      </g>
    </Icon>
  )
}

export default Checkmark
