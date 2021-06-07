import React from 'react'
import styled from 'styled-components'

interface StudentTopNavigationProps {
  avatar: string
  username: string
  helloText: string
  logoutText: string
  handleLogout: () => void
}

export const StudentTopNavigation = (
  props: StudentTopNavigationProps
): JSX.Element => {
  const { avatar, helloText, logoutText, handleLogout } = props

  return (
    <StudentTopNavigationContainer>
      <NavbarLogo>
        <img src='/assets/logo/LogoDarkBg.svg' alt='logo icon' />
      </NavbarLogo>
      <NavbarLinks>
        <Link href='/exams'>Practice Exams</Link>
      </NavbarLinks>
      <NavbarRight>
        <NavbarUser>
          <NavbarUserIcon src={avatar} alt='profile icon' />
          <p>{helloText}</p>
        </NavbarUser>
      </NavbarRight>
      <LogoutButton onClick={handleLogout}>{logoutText}</LogoutButton>
    </StudentTopNavigationContainer>
  )
}

const StudentTopNavigationContainer = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.palette.black};
  box-shadow: ${({ theme }) => theme.shadows.headerShadow};
  display: flex;
  height: ${({ theme }) => theme.dimensions.studentTopNavHeight};
  line-height: ${({ theme }) => theme.dimensions.studentTopNavHeight};
  justify-content: space-between;
  padding: 0 32px;
  width: 100%;
`

const NavbarLogo = styled.div`
  display: flex;
  height: 100%;
  color: ${({ theme }) => theme.palette.biege};

  img {
    width: 200px;
  }
`

const NavbarLinks = styled.div`
  color: ${({ theme }) => theme.palette.white};
  flex: 1 1 auto;
  font-size: ${({ theme }) => theme.typography.fontSizeNormal};
  padding: 0 32px;
  text-decoration: none;
`

const Link = styled.a`
  font-size: ${({ theme }) => theme.typography.fontSizeNormal};
  text-decoration: none;
  letter-spacing: -0.1px;

  &:hover {
    color: ${({ theme }) => theme.palette.white};
    text-decoration: none;
  }
`

const NavbarUser = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row;
  color: ${({ theme }) => theme.palette.grey07};
  font-size: ${({ theme }) => theme.typography.fontSizeNormal};
  letter-spacing: -0.1px;
`

const NavbarUserIcon = styled.img`
  border-radius: 100%;
  background: ${({ theme }) => theme.palette.white};
  height: 48px;
  width: 48px;
  margin: 0 16px 0 0;
`

const NavbarRight = styled.div`
  align-items: center;
  display: flex;
`

const LogoutButton = styled.div`
  color: ${({ theme }) => theme.palette.grey07};
  cursor: pointer;
  font-size: ${({ theme }) => theme.typography.fontSizeNormal};
  letter-spacing: -0.1px;
  margin-left: 64px;

  &:hover {
    color: ${({ theme }) => theme.palette.white};
  }
`

StudentTopNavigation.defaultProps = {
  username: 'error',
  avatar: '/assets/illustrations/AvatarPlaceholder.png',
  logoutText: 'Log out',
  helloText: 'Hi, Username',
  handleLogout: () => {}
}

export default StudentTopNavigation
