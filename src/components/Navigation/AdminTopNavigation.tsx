import React from 'react'
import styled from 'styled-components'

interface AdminTopNavigationProps {
  username: string
  logoutName: string
  handleLogout: () => void
}

export const AdminTopNavigation = (
  props: AdminTopNavigationProps
): JSX.Element => {
  const { username, logoutName, handleLogout } = props

  return (
    <AdminTopNavigationContainer>
      <div className='admin-top-nav__logo'>
        <img src='./assets/logo/LogoDarkBg.png' />
      </div>
      <div className='admin-top-nav__content'>
        <div className='admin-top-nav__content-element'>{username}</div>
        <div
          className='admin-top-nav__content-element admin-top-nav__content-element--logout'
          onClick={handleLogout}
        >
          {logoutName}
        </div>
      </div>
    </AdminTopNavigationContainer>
  )
}

const AdminTopNavigationContainer = styled.div`
  background-color: ${props => props.theme.palette.brown01};
  padding: 0 24px;
  height: ${props => props.theme.dimensions.adminTopNavHeight};
  line-height: ${props => props.theme.dimensions.adminTopNavHeight};
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .admin-top-nav__logo {
    height: 100%;
    display: flex;
    align-items: center;
    color: ${props => props.theme.palette.biege};
  }

  .admin-top-nav__content {
    display: flex;
    align-items: center;
  }

  .admin-top-nav__content-element {
    color: ${props => props.theme.palette.biege};
    font-size: ${props => props.theme.typography.fontSizeSmall};
    letter-spacing: -0.1px;
  }

  .admin-top-nav__content-element--logout {
    margin-left: 64px;
    cursor: pointer;
    font-size: ${props => props.theme.typography.fontSizeNormal};

    &:hover {
      text-decoration: underline;
    }
  }
`

AdminTopNavigation.defaultProps = {}

export default AdminTopNavigation
