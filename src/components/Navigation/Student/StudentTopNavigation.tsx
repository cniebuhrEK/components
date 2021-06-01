import React from 'react'
import styled from 'styled-components'

interface StudentTopNavigationProps {
  username: string
  avatar: string
  logoutName: string
  handleLogout: () => void
}

export const StudentTopNavigation = (
  props: StudentTopNavigationProps
): JSX.Element => {
  const { username, avatar, logoutName, handleLogout } = props

  return (
    <StudentTopNavigationContainer>
      <NavbarLogo>
        <img src='/assets/logo/LogoDarkBg.svg' alt='logo icon' />
      </NavbarLogo>
      <NavbarLinks>
        <a href='/exams'>Student Exams</a>
      </NavbarLinks>
      <NavbarRight>
        <NavbarUser>
          <NavbarUserIcon src={avatar} alt='profile icon' />
          <p>{`Hi, ${username}`}</p>
        </NavbarUser>
      </NavbarRight>
      <LogoutButton onClick={handleLogout}>{logoutName}</LogoutButton>
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

  a:hover {
    color: ${({ theme }) => theme.palette.white};
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
    text-decoration: underline;
  }
`

StudentTopNavigation.defaultProps = {
  username: 'error',
  avatar:
    'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
  logoutName: 'Log out',
  handleLogout: () => {}
}

export default StudentTopNavigation
