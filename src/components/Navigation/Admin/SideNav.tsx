// Navigation/Admin/SideNav.tsx - Side navigation component

import React from 'react'
import styled from 'styled-components'

import IconLink from '../../Link/IconLink'

interface AdminSideNavigationLinkProps {
  name: string
  href: string
  isActive: boolean
  icon: string | JSX.Element
  id: string
  disabled?: boolean
}

interface AdminSideNavigationProps {
  links: AdminSideNavigationLinkProps[]
}

const AdminSideNavigation = (props: AdminSideNavigationProps): JSX.Element => {
  const { links } = props

  return (
    <Container>
      {links.map(l => (
        <LinkContainer key={l.id} active={l.isActive}>
          <IconLink
            light
            isActive={l.isActive}
            name={l.name}
            icon={l.icon}
            href={l.href}
            disabled={l.disabled}
          />
        </LinkContainer>
      ))}
    </Container>
  )
}

const Container = styled.div`
  padding: 32px 0;
  height: calc(100vh - ${({ theme }) => theme.dimensions.adminTopNavHeight});
  width: ${({ theme }) => theme.dimensions.adminSideNavWidth};
  overflow: auto;
`

const LinkContainer = styled.div`
  height: 44px;
  line-height: 44px;
  display: flex;
  align-items: center;
  padding: 0px 21px;
  position: relative;

  &:hover {
    background-color: ${({ theme }) => theme.palette.biege};
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
    cursor: pointer;
  }

  ${({ active }) => !active} {
    background-color: ${({ theme }) => theme.palette.biege};
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);

    &::before {
      content: '';
      position: absolute;
      left: 0px;
      top: 0px;
      width: 3px;
      height: 100%;
      background-color: ${({ theme }) => theme.palette.orange01};
    }
  }

  ${({ disabled }) => !disabled} {
    background-color: ${({ theme }) => theme.palette.biege};
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
  }
`

AdminSideNavigation.defaultProps = {}

export default AdminSideNavigation
