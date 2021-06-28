// Breadcrumbs/BreadcrumbItem - Breadcrumb child component

import React from 'react'
import styled from 'styled-components'

interface BreadcrumbItemProps {
  children: JSX.Element[] | JSX.Element | null
  active: boolean
}

const BreadcrumbItem = (props: BreadcrumbItemProps): JSX.Element => {
  const { children, active } = props

  return (
    <BreadcrumbItemContainer active={active}>
      {children}
    </BreadcrumbItemContainer>
  )
}

BreadcrumbItem.defaultProps = {
  children: [],
  active: false
}

const BreadcrumbItemContainer = styled.div`
  a {
    color: ${({ theme }) => theme.palette.black};
    text-decoration: none;
    font-weight: ${({ active }) => (active ? '600' : '400')};
  }

  a:hover {
    font-weight: 600;
    text-decoration: none;
  }
`

export default BreadcrumbItem
