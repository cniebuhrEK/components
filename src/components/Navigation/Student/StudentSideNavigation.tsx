import React from 'react'
import styled from 'styled-components'

export const StudentSideNavigation = ({ children }): JSX.Element => {
  return <Container>{children}</Container>
}

const Container = styled.div`
  position: relative;
  padding: 20px;
  background-color: ${({ theme }) => theme.palette.brown01};
  height: 100vh;
  width: ${({ theme }) => theme.dimensions.studentSideNavWidth};
  overflow: auto;
`

StudentSideNavigation.defaultProps = {
  children: []
}

export default StudentSideNavigation
