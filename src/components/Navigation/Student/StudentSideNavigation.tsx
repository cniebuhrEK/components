import React from 'react'
import styled from 'styled-components'

import IconLink from '../../Link/IconLink'

interface StudentSideNavigationLinkProps {
  name: string
  href: string
  isActive: boolean
  icon: string | JSX.Element
  id: string
}

interface StudentSideNavigationProps {
  links: StudentSideNavigationLinkProps[]
}

export const StudentSideNavigation = (
  props: StudentSideNavigationProps
): JSX.Element => {
  const { links } = props

  return (
    <StudentSideNavigationContainer>
      <div className='side-nav__logo-container'>
        <img className='side-nav__logo' src='/assets/logo/LogoDarkBg.svg' />
      </div>
      <div className='side-nav__links'>
        {links.map(l => (
          <StudentSideNavigationLinkContainer key={l.id} active={l.isActive}>
            <IconLink
              light
              isActive={l.isActive}
              name={l.name}
              icon={l.icon}
              href={l.href}
            />
          </StudentSideNavigationLinkContainer>
        ))}
      </div>
    </StudentSideNavigationContainer>
  )
}

const StudentSideNavigationContainer = styled.div`
  padding: 20px 0;
  background-color: ${({ theme }) => theme.palette.brown01};
  height: 100vh;
  width: ${({ theme }) => theme.dimensions.studentSideNavWidth};
  overflow: auto;

  .side-nav__logo-container {
    padding: 0 20px 12px;
  }

  .side-nav__logo {
    max-height: 32px;
  }
`

const StudentSideNavigationLinkContainer = styled.div`
  height: 44px;
  line-height: 44px;
  display: flex;
  align-items: center;
  padding: 4px 21px;
  position: relative;

  ${({ active }) => !active} {
      background-color: ${({ theme }) => theme.palette.brown02};

      &::before {
        content: '';
        position: absolute;
        left: 8px;
        top: 4px;
        width: 3px;
        height: calc(100% - 8px);
        background-color: ${({ theme }) => theme.palette.orange05};
      }
    }
  }
`

StudentSideNavigation.defaultProps = {}

export default StudentSideNavigation
