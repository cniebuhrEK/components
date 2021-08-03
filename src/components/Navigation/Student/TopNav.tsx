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
  onMenuClick: () => void
}

const StudentTopNavigation = (
  props: StudentTopNavigationProps
): JSX.Element => {
  const { avatar, menu, greeting, onMenuClick } = props

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
        <Button onClick={onMenuClick}>{menu}</Button>
      </NavRight>
    </Container>
  )
}

StudentTopNavigation.defaultProps = {
  avatar: '',
  menu: '',
  greeting: '',
  onMenuClick: () => {}
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

export default StudentTopNavigation
