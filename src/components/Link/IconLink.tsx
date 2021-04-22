import React from 'react'
import cx from 'classnames'
import styled from 'styled-components'

interface IconLinkProps {
  isActive: boolean
  disabled?: boolean
  light?: boolean
  onClick: () => void
  name: string
  icon: string | JSX.Element
}

export const IconLink = (props: IconLinkProps): JSX.Element => {
  const { isActive, name, icon, disabled, onClick, light } = props

  const containerClass = cx({
    '--isActive': isActive,
    '--disabled': disabled
  })

  return (
    <IconLinkContainer
      onClick={onClick}
      disabled={disabled}
      className={containerClass}
      light={light}
    >
      <div className='icon-link__icon'>{icon}</div>
      <div className='icon-link__name'>{name}</div>
    </IconLinkContainer>
  )
}

const IconLinkContainer = styled.a`
  display: flex;
  align-items: center;
  color: ${props =>
    props.light ? props.theme.palette.biege : props.theme.palette.grey07};
  font-weight: normal;
  text-decoration: none;
  font-size: ${props => props.theme.typography.fontSizeNormal};
  cursor: pointer;
  letter-spacing: 0;

  .icon-link__icon {
    display: flex;
    align-items: center;
    font-size: 20px;
    margin-right: 10px;
  }

  &:hover,
  &:active,
  &.--isActive {
    text-decoration: none;
    font-weight: 600;
  }

  &.--disabled {
    color: ${props => props.theme.palette.grey08};
    letter-spacing: 0;
    font-weight: 600;
    cursor: not-allowed;
  }
`

IconLink.defaultProps = {
  isActive: false,
  name: 'Log out',
  icon: 'x',
  onClick: () => {}
}

export default IconLink
