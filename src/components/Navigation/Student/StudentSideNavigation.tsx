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
      <NavLinks>
        {links.length > 0 &&
          links.map(l => (
            <Accordion
              key={`exam-score-report-${l.exam_id}`}
              text={`${l.title} Score Report`}
            >
              <Accordion text='Answers / Graph'>
                {l.sections.length > 0 ? (
                  l.sections.map(s => (
                    <Accordion
                      key={`section-answer-diagnostic-${s.id}`}
                      text={s.title}
                    >
                      <NavList>
                        <a
                          href={`/exam/${l.exam_id}/score-report/${s.id}/answer-sheet`}
                        >
                          Answer Sheet
                        </a>
                        <a
                          href={`/exam/${l.exam_id}/score-report/${s.id}/diagnostic`}
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
                  <a
                    key={`full-mcat-projection-${l.exam_id}`}
                    href={`/exam/${l.exam_id}/score-projection`}
                  >
                    Full MCAT
                  </a>

                  {l.sections.map(s => (
                    <a
                      key={`section-projection-${s.id}`}
                      href={`/exam/${l.exam_id}/score-projection/${s.id}`}
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
`

const NavList = styled.div`
  display: flex;
  flex-flow: column;

  a {
    color: ${({ theme }) => theme.palette.white};
    font-size: 1.2rem;
    padding: 4px;
    text-decoration: none;
  }

  a:hover {
    background-color: rgba(255, 255, 255, 0.05);
    font-weight: 400;
    text-decoration: none;
  }
`

const NavLinks = styled.div`
  padding: 0px 0px 0px 8px;
`

StudentSideNavigation.defaultProps = {
  links: []
}

export default StudentSideNavigation
