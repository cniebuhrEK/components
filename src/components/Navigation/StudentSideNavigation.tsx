import React from 'react'
import cx from 'classnames'
import styled from 'styled-components'

import IconLink from '../Link/IconLink'

interface StudentSideNavigationLinkProps {
  name: string
  onClick: () => void
  isActive: boolean
  icon: string | JSX.Element
  id: string
}

interface StudentSideNavigationProps {
  links: StudentSideNavigationLinkProps[]
}

const StudentSideNavigationLink = (
  props: StudentSideNavigationLinkProps
): JSX.Element => {
  const { isActive, name, icon, onClick } = props

  const containerClass = cx({
    '--isActive': isActive
  })

  return (
    <StudentSideNavigationLinkContainer className={containerClass}>
      <IconLink
        light
        isActive={isActive}
        name={name}
        icon={icon}
        onClick={onClick}
      />
    </StudentSideNavigationLinkContainer>
  )
}

export const StudentSideNavigation = (
  props: StudentSideNavigationProps
): JSX.Element => {
  const { links } = props

  const renderLinks = links.map(link => (
    <StudentSideNavigationLink
      isActive={link.isActive}
      key={link.id}
      name={link.name}
      onClick={link.onClick}
      icon={link.icon}
      id={link.id}
    />
  ))

  return (
    <StudentSideNavigationContainer>
      <div className='side-nav__logo-container'>
        <img className='side-nav__logo' src='/assets/logo/LogoDarkBg.png' />
      </div>
      <div className='side-nav__links'>{renderLinks}</div>
    </StudentSideNavigationContainer>
  )
}

const StudentSideNavigationContainer = styled.div`
  padding: 20px 0;
  background-color: ${props => props.theme.palette.brown01};
  height: 100vh;
  width: ${props => props.theme.dimensions.studentSideNavWidth};
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

  &.--isActive {
    background-color: ${props => props.theme.palette.brown02};

    &::before {
      content: '';
      position: absolute;
      left: 8px;
      top: 4px;
      width: 3px;
      height: calc(100% - 8px);
      background-color: ${props => props.theme.palette.orange05};
    }
  }
`

StudentSideNavigation.defaultProps = {}

export default StudentSideNavigation
