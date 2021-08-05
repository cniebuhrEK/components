// Navigation/Student/TopNav.tsx - Top navigation component

import React from 'react'
import styled from 'styled-components'
import { Button } from '../../Button'

type MenuLink = {
  label: string
  url: string
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
        <MenuContainer onMouseLeave={() => setOpen(false)}>
          <Button onMouseEnter={() => setOpen(true)}>{menu}</Button>
          <NavMenu open={open}>
            {links.map((l: MenuLink, i: number) => (
              <NavMenuItem key={`nav-menu-link-${i}`}>
                <a href={l.url}>{l.label}</a>
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

const LogoContainer = styled.div`
  display: flex;
  height: 100%;
  width: ${({ theme }) => theme.dimensions.studentSideNavWidth};
  color: ${({ theme }) => theme.palette.biege};

  img {
    width: 200px;
  }
`

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

const MenuContainer = styled.div`
  position: relative;
`

const NavMenu = styled.div`
    min-width: 120px;
    background-color ${({ theme }) => theme.palette.white};
    position: absolute;
    top: ${({ theme }) => theme.dimensions.studentTopNavHeight};
    border-radius: ${({ theme }) => theme.shape.borderRadiusBig};
    right: 0;
    height: auto;
    box-shadow: 0px 10px 20px #CDC5BB;
    display: ${({ open }) => (open ? 'block' : 'none')};
`

const NavMenuItem = styled.div`
  line-height: normal;
  padding: 12px 16px;
  color: ${({ theme }) => theme.palette.darkblue01};

  a {
    color: ${({ theme }) => theme.palette.darkblue01};
    font-size: ${({ theme }) => theme.typography.fontSizeNormal};
  }

  &:hover {
    border-left: 3px solid ${({ theme }) => theme.palette.orange02};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    cursor: pointer;
  }
`

export default StudentTopNavigation
