import React from 'react'
import Icon from '../components/Icon'

export const QuestionUnanswered = props => {
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
        <path d='M918 212c42 72 64 150 64 236s-22 164-64 236-98 128-170 170-150 64-236 64-164-22-236-64-128-98-170-170-64-150-64-236 22-164 64-236 98-128 170-170 150-64 236-64 164 22 236 64 128 98 170 170zM664 88c-48-20-100-30-152-30-54 0-104 10-152 30s-90 50-124 84c-36 34-64 76-84 124s-30 100-30 152 10 104 30 152 50 90 84 124c34 36 76 64 124 84s100 30 152 30c54 0 104-10 152-30 48-22 90-50 124-84 36-34 64-76 84-124s30-100 30-152-10-104-30-152-50-90-84-124c-34-36-76-64-124-84z' />
      </g>
    </Icon>
  )
}

export default QuestionUnanswered
