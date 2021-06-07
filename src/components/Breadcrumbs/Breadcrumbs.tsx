import React from 'react'
import styled from 'styled-components'

import BreadcrumbItem from './BreadcrumbItem'

const BreadcrumbSeparator = ({ children, ...props }) => (
  <SeperatorContainer {...props}>{children}</SeperatorContainer>
)

const Breadcrumbs = ({ children }): JSX.Element => {
  return (
    <BreadcrumbContainer>
      {children
        .map((child: JSX.Element, i: number) => {
          if (i < children.length - 1) {
            return (
              <BreadcrumbItem key={`breadcrumb-item-${i}`}>
                {child}
              </BreadcrumbItem>
            )
          }

          return (
            <BreadcrumbItem key={`breadcrumb-item-${i}`} active>
              {child}
            </BreadcrumbItem>
          )
        })
        .reduce((acc, child: JSX.Element, i: number) => {
          if (i < children.length - 1) {
            acc.push(
              child,
              <BreadcrumbSeparator key={`breadcrumb_sep-${i}`}>
                &gt;
              </BreadcrumbSeparator>
            )
          } else {
            acc.push(child)
          }

          return acc
        }, [])}
    </BreadcrumbContainer>
  )
}

const BreadcrumbContainer = styled.ol`
  list-style: none;
  display: flex;
  align-items: center;
`

const SeperatorContainer = styled.li`
  color: #333;
  margin: auto 6px;
  user-select: none;
`

export default Breadcrumbs
