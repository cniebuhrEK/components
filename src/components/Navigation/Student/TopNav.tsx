// Navigation/Student/TopNav.tsx - Top navigation component

import React from 'react'
import styled from 'styled-components'
import { Button } from '../../Button'

type MenuLink = {
  label: string
  url: string
  icon?: JSX.Element
}

interface StudentTopNavigationProps {
  avatar: string
  greeting: string
  menu: string
  links: MenuLink[]
}

const StudentTopNavigation = (
  props: StudentTopNavigationProps
): JSX.Element => {
  const { avatar, menu, greeting, links } = props
  const [open, setOpen] = React.useState(false)

  const handleMouseLeave = () => setOpen(false)

  return (
    <Container>
      <LogoContainer>
        <img src='/assets/logo/LogoDarkBg.svg' alt='logo icon' />
      </LogoContainer>

      <NavRight>
        <UserContainer>
          {avatar && <IconContainer src={avatar} alt='profile icon' />}
          <p>{greeting}</p>
        </UserContainer>

        <Overlay open={open} />
        <MenuContainer open={open} onMouseLeave={handleMouseLeave}>
          <Button onMouseEnter={() => setOpen(true)}>{menu}</Button>
          <NavMenu open={open}>
            {links.map((l: MenuLink, i: number) => (
              <NavMenuItem key={`nav-menu-link-${i}`}>
                {l.icon && <NavMenuIcon>{l.icon}</NavMenuIcon>}
                <NavMenuLink href={l.url}>{l.label}</NavMenuLink>
              </NavMenuItem>
            ))}
          </NavMenu>
        </MenuContainer>
      </NavRight>
    </Container>
  )
}

StudentTopNavigation.defaultProps = {
  avatar: '',
  menu: '',
  greeting: '',
  links: [],
  onMenuHover: () => {}
}

const Container = styled.div`
  align-items: center;
  background-color: none;
  display: flex;
  height: ${({ theme }) => theme.dimensions.studentTopNavHeight};
  line-height: ${({ theme }) => theme.dimensions.studentTopNavHeight};
  justify-content: space-between;
  padding: 0 32px;
  width: 100%;
  max-width: 1280px;
  margin: auto;
`

const Overlay = styled.div`
  width: ${({ open }) => (open ? '100%' : '0')};
  height: ${({ open }) => (open ? '100%' : '0')};
  opacity: ${({ open }) => (open ? 1 : 0)};
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: ${({ theme }) => theme.palette.overlay};
  filter: blur(2px);
  backdrop-filter: blur(2px);
  transition: opacity 400ms ${({ theme }) => theme.transitions.easing.easeInOut};
  z-index: ${({ theme }) => theme.zIndex.menu - 10};
`

const LogoContainer = styled.div`
  display: flex;
  height: 100%;
  width: ${({ theme }) => theme.dimensions.studentSideNavWidth};
  color: ${({ theme }) => theme.palette.biege};

  img {
    width: 200px;
  }
`
//
// Navigation User
//
const UserContainer = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row;
  color: ${({ theme }) => theme.palette.grey07};
  font-size: ${({ theme }) => theme.typography.fontSizeNormal};
  margin-right: 2em;

  p {
    white-space: nowrap;
  }
`

const IconContainer = styled.img`
  border-radius: 100%;
  background: ${({ theme }) => theme.palette.white};
  height: 48px;
  width: 48px;
  margin: 0 16px 0 0;
`

const NavRight = styled.div`
  align-items: center;
  justify-content: space-between;
  display: flex;
  width: auto;
`

//
// Navigation Menu
//

const MenuContainer = styled.div`
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.menu};
`

const NavMenu = styled.div`
    background-color ${({ theme }) => theme.palette.white};
    border-radius: ${({ theme }) => theme.shape.borderRadiusBig};
    box-shadow: 0px 10px 20px #CDC5BB;
    display: ${({ open }) => (open ? 'block' : 'none')};
    opacity: ${({ open }) => (open ? '1' : '0')};
    width: ${({ open }) => (open ? 'auto' : '0')};
    height: ${({ open }) => (open ? 'auto' : '0')};
    min-width: ${({ open }) => (open ? '200px' : '0')};
    position: absolute;
    right: 0;
    top: ${({ theme }) => theme.dimensions.studentTopNavHeight};
    z-index: ${({ theme }) => theme.zIndex.menu};
    transition: opacity 700ms ${({ theme }) =>
      theme.transitions.easing.easeInOut};
`

const NavMenuLink = styled.a`
  color: ${({ theme }) => theme.palette.darkblue01};
  font-size: ${({ theme }) => theme.typography.fontSizeNormal};
  white-space: nowrap;
`

const NavMenuIcon = styled.div`
  margin: 0 8px 0 0;
`

const NavMenuItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  line-height: normal;
  width: auto;
  padding: 12px 16px;
  color: ${({ theme }) => theme.palette.darkblue01};
  border-left: 3px solid transparent;

  &:hover {
    border-left: 3px solid ${({ theme }) => theme.palette.orange02};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    cursor: pointer;
  }

  &:hover ${NavMenuLink} {
    font-weight: 600;
  }
`

export default StudentTopNavigation
