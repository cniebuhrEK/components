// IconLink/Link.tsx - Link component

import React from 'react'
import cx from 'classnames'
import styled from 'styled-components'

interface LinkProps {
  isActive: boolean
  disabled?: boolean
  name: string
}

const Link = (props: LinkProps): JSX.Element => {
  const { isActive, name, disabled } = props

  const containerClass = cx({
    '--isActive': isActive,
    '--disabled': disabled
  })

  return (
    <LinkContainer disabled={disabled} className={containerClass}>
      {name}
    </LinkContainer>
  )
}

const LinkContainer = styled.a`
  color: ${props => props.theme.palette.gray3};
  font-weight: normal;
  text-decoration: none;
  font-size: ${props => props.theme.typography.fontSizeSmall};
  cursor: pointer;
  letter-spacing: -0.1px;

  &:hover,
  &:active,
  &.--isActive {
    text-decoration: underline;
    font-weight: normal;
    color: ${props => props.theme.palette.gray1};
  }

  &.--disabled {
    color: ${props => props.theme.palette.grey08};
    cursor: not-allowed;
  }
`

Link.defaultProps = {
  isActive: false,
  name: 'Forgot password?'
}

export default Link
