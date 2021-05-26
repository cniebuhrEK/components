import React from 'react'
import styled from 'styled-components'

import IconLink from '../../Link/IconLink'

interface AdminSideNavigationLinkProps {
  name: string
  href: string
  isActive: boolean
  icon: string | JSX.Element
  id: string
}

interface AdminSideNavigationProps {
  links: AdminSideNavigationLinkProps[]
}

export const AdminSideNavigation = (
  props: AdminSideNavigationProps
): JSX.Element => {
  const { links } = props

  return (
    <AdminSideNavigationContainer>
      {links.map(l => (
        <AdminSideNavigationLinkContainer key={l.id} active={l.isActive}>
          <IconLink
            isActive={l.isActive}
            name={l.name}
            icon={l.icon}
            href={l.href}
          />
        </AdminSideNavigationLinkContainer>
      ))}
    </AdminSideNavigationContainer>
  )
}

const AdminSideNavigationContainer = styled.div`
  padding: 32px 0;
  background-color: ${({ theme }) => theme.palette.grey09};
  height: calc(100vh - ${({ theme }) => theme.dimensions.adminTopNavHeight});
  width: ${({ theme }) => theme.dimensions.adminSideNavWidth};
  overflow: auto;
`

const AdminSideNavigationLinkContainer = styled.div`
  height: 44px;
  line-height: 44px;
  display: flex;
  align-items: center;
  padding: 4px 21px;
  position: relative;

  ${({ active }) => !active} {
    background-color: ${({ theme }) => theme.palette.biege};

    &::before {
      content: '';
      position: absolute;
      left: 8px;
      top: 4px;
      width: 3px;
      height: calc(100% - 8px);
      background-color: ${({ theme }) => theme.palette.orange05};
    }
  }
`

AdminSideNavigation.defaultProps = {}

export default AdminSideNavigation
