import React from 'react'
import styled from 'styled-components'

export const StudentSideNavigation = ({ children }): JSX.Element => {
  return <Container>{children}</Container>
}

const Container = styled.div`
  position: relative;
  padding: 20px 0;
  background-color: ${({ theme }) => theme.palette.brown01};
  height: 100%;
  width: ${({ theme }) => theme.dimensions.studentSideNavWidth};
  overflow: auto;
`

StudentSideNavigation.defaultProps = {
  children: []
}

export default StudentSideNavigation
