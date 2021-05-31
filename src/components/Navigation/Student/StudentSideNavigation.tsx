import React from 'react'
import styled from 'styled-components'
import Accordion from '../../Accordion'

interface NavSection {
  id: number
  title: string
}

interface NavCategory {
  // TODO(Brett, Daria): It would be nice if API endpoints returned all fields
  // in camelcase. Eslint screams otherwise.
  /* eslint-disable camelcase */
  exam_id: number
  title: string
  sections: NavSection[]
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
            <Accordion key={l.exam_id} text={`${l.title} Score Report`}>
              <Accordion text='Answers / Graph'>
                {l.sections.length > 0 ? (
                  l.sections.map(s => (
                    <Accordion key={s.id} text={s.title}>
                      <NavList>
                        <a
                          href={`/exams/${l.exam_id}/score-report/${s.id}/answer-sheet`}
                        >
                          Answer Sheet
                        </a>
                        <a
                          href={`/exams/${l.exam_id}/score-report/${s.id}/diagnostic`}
                        >
                          Diagnostic
                        </a>
                      </NavList>
                    </Accordion>
                  ))
                ) : (
                  <span />
                )}
              </Accordion>
              <Accordion text='Score Projection'>
                <NavList>
                  <a key={1} href={`/exams/${l.exam_id}/score-projection`}>
                    Full MCAT
                  </a>

                  {l.sections.map(s => (
                    <a
                      key={s.id + 1}
                      href={`/exams/${l.exam_id}/score-projection/${s.id}`}
                    >
                      {s.title}
                    </a>
                  ))}
                </NavList>
              </Accordion>
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
