import React from 'react'
import cx from 'classnames'
import styled from 'styled-components'

import IconLink from '../Link/IconLink'

interface AdminSideNavigationLinkProps {
  name: string
  onClick: () => void
  isActive: boolean
  icon: string | JSX.Element
  id: string
}

interface AdminSideNavigationProps {
  links: AdminSideNavigationLinkProps[]
}

const AdminSideNavigationLink = (
  props: AdminSideNavigationLinkProps
): JSX.Element => {
  const { isActive, name, icon, onClick } = props

  const containerClass = cx({
    '--isActive': isActive
  })

  return (
    <AdminSideNavigationLinkContainer className={containerClass}>
      <IconLink isActive={isActive} name={name} icon={icon} href={href} />
    </AdminSideNavigationLinkContainer>
  )
}

export const AdminSideNavigation = (
  props: AdminSideNavigationProps
): JSX.Element => {
  const { links } = props

  const renderLinks = links.map(link => (
    <AdminSideNavigationLink
      isActive={link.isActive}
      key={link.id}
      name={link.name}
      onClick={link.onClick}
      icon={link.icon}
      id={link.id}
    />
  ))

  return (
    <AdminSideNavigationContainer>{renderLinks}</AdminSideNavigationContainer>
  )
}

const AdminSideNavigationContainer = styled.div`
  padding: 32px 0;
  background-color: ${props => props.theme.palette.grey09};
  height: calc(100vh - ${props => props.theme.dimensions.adminTopNavHeight});
  width: ${props => props.theme.dimensions.adminSideNavWidth};
  overflow: auto;
`

const AdminSideNavigationLinkContainer = styled.div`
  height: 44px;
  line-height: 44px;
  display: flex;
  align-items: center;
  padding: 4px 21px;
  position: relative;

  &.--isActive {
    background-color: ${props => props.theme.palette.biege};

    &::before {
      content: '';
      position: absolute;
      left: 8px;
      top: 4px;
      width: 3px;
      height: calc(100% - 8px);
      background-color: ${props => props.theme.palette.orange05};
    }
  }
`

AdminSideNavigation.defaultProps = {}

export default AdminSideNavigation
