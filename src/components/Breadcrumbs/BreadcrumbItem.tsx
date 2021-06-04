import React from 'react'
import styled from 'styled-components'

const BreadcrumbItem = ({ children, ...props }): JSX.Element => (
  <BreadcrumbItemContainer {...props}>{children}</BreadcrumbItemContainer>
)

const BreadcrumbItemContainer = styled.div`
  a {
    color: ${({ theme }) => theme.palette.black};
    text-decoration: none;
  }

  a:hover {
    font-weight: 600;
    text-decoration: none;
  }
`

export default BreadcrumbItem
