// Navigation/Student/SideNav.tsx - Side navigation component

import React from 'react'
import styled from 'styled-components'

export const StudentSideNavigation = ({ children }): JSX.Element => {
  return <Container>{children}</Container>
}

const Container = styled.div`
  position: relative;
  padding: 20px 0;
  background-color: ${({ theme }) => theme.palette.brown01};
  height: calc(100vh - ${({ theme }) => theme.dimensions.studentTopNavHeight});
  width: ${({ theme }) => theme.dimensions.studentSideNavWidth};
  overflow: auto;
`

StudentSideNavigation.defaultProps = {
  children: []
}

export default StudentSideNavigation
