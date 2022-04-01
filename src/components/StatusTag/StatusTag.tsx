// StatusTag/StatusTag.tsx - Status component

import React from 'react'
import styled from 'styled-components'

interface StatusTagProps {
  color: 'green' | 'orange' | 'grey' | null
  text: string
}

export const StatusTag = (props: StatusTagProps): JSX.Element => {
  const { color, text } = props

  return (
    <div>
      {color ? (
        <StatusTagContainer color={color}>{text}</StatusTagContainer>
      ) : null}
    </div>
  )
}

const StatusTagContainer = styled.div`
  padding: 2px 4px;
  width: 65px;
  font-size: 11px;
  font-weight: bold;
  text-align: center;
  border-radius: 16px;
  background: ${({ theme, color }) =>
    color ? theme.colors.statusTags[color].background : 'transparent'};
  color: ${({ theme, color }) =>
    color ? theme.colors.statusTags[color].text : 'transparent'};
`

StatusTag.defaultProps = {
  color: null,
  text: ''
}

export default StatusTag
