import React from 'react'
import styled from 'styled-components'
import Accordion from '../../Accordion'

// import IconLink from '../../Link/IconLink'

/*
 interface LinkProps {
  id: string
  title: string
  href: string
  isActive: boolean
  icon: string | JSX.Element
}
	*/

interface NavCategory {
  id: string
  title: string
  sections: any[]
}

interface StudentSideNavigationProps {
  links: NavCategory[]
}

export const StudentSideNavigation = (
  props: StudentSideNavigationProps
): JSX.Element => {
  const { links } = props

  return (
    <Container>
      <div className='side-nav__logo-container'>
        <img className='side-nav__logo' src='/assets/logo/LogoDarkBg.svg' />
      </div>
      <NavLinks>
        {links.length > 0 &&
          links.map(l => (
            <Accordion key={l.id} text={l.title}>
              {l.sections.length > 0 ? (
                l.sections.map(s => (
                  <Accordion key={s.id} text={s.title}>
                    <NavList>
                      <a href='/answers'>Answer Sheet</a>
                      <a href='/diagnostics'>Diagnostic</a>
                    </NavList>
                  </Accordion>
                ))
              ) : (
                <span />
              )}
            </Accordion>
          ))}
      </NavLinks>
    </Container>
  )
}

const Container = styled.div`
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

const NavList = styled.div`
  display: flex;
  flex-flow: column;

  a {
    text-decoration: none;
    font-size: 1.2rem;
    padding: 4px;
  }

  a:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`

const NavLinks = styled.div`
  padding: 0px 0px 0px 8px;
`

StudentSideNavigation.defaultProps = {
  links: []
}

export default StudentSideNavigation
