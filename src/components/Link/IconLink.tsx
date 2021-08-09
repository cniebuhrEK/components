// IconLink/IconLink.tsx - Icon link component

import React from 'react'
import cx from 'classnames'
import styled from 'styled-components'

interface IconLinkProps {
  isActive: boolean
  disabled?: boolean
  light?: boolean
  href: string
  name: string
  icon: string | JSX.Element
}

const IconLink = (props: IconLinkProps): JSX.Element => {
  const { isActive, name, icon, disabled, href, light } = props

  const containerClass = cx({
    '--isActive': isActive,
    '--disabled': disabled
  })

  return (
    <Container
      href={href}
      disabled={disabled}
      className={containerClass}
      light={light}
    >
      <Icon>{icon}</Icon>
      <Name>{name}</Name>
    </Container>
  )
}

const Container = styled.a`
  display: flex;
  align-items: center;
  color: ${({ light, theme }) =>
    light ? theme.palette.darkblue01 : theme.palette.grey07};
  font-weight: normal;
  text-decoration: none;
  font-size: ${({ theme }) => theme.typography.fontSizeNormal};
  cursor: pointer;
  letter-spacing: 0;

  &:hover,
  &:active,
  &.--isActive {
    text-decoration: none;
    font-weight: 600;
  }

  &.--disabled {
    color: ${({ theme }) => theme.palette.inactive};
    letter-spacing: 0;
    font-weight: 600;
    cursor: not-allowed;
  }
`

const Icon = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  margin-right: 10px;
`

const Name = styled.div``

IconLink.defaultProps = {
  isActive: false,
  name: '',
  icon: '',
  onClick: () => {}
}

export default IconLink
