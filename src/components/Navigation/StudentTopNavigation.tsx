import React from 'react'
import styled from 'styled-components'

interface StudentTopNavigationProps {
  username: string
  logoutName: string
  handleLogout: () => void
}

export const StudentTopNavigation = (
  props: StudentTopNavigationProps
): JSX.Element => {
  const { username, logoutName, handleLogout } = props

  return (
    <StudentTopNavigationContainer>
      <div className='student-top-nav__content'>
        <div className='student-top-nav__content-element'>{username}</div>
        <div
          className='student-top-nav__content-element student-top-nav__content-element--logout'
          onClick={handleLogout}
        >
          {logoutName}
        </div>
      </div>
    </StudentTopNavigationContainer>
  )
}

const StudentTopNavigationContainer = styled.div`
  background-color: ${props => props.theme.palette.biege};
  padding: 0 64px;
  height: ${props => props.theme.dimensions.studentTopNavHeight};
  line-height: ${props => props.theme.dimensions.studentTopNavHeight};
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  .student-top-nav__content {
    display: flex;
    align-items: center;
  }

  .student-top-nav__content-element {
    color: ${props => props.theme.palette.grey07};
    font-size: ${props => props.theme.typography.fontSizeSmall};
    letter-spacing: -0.1px;
  }

  .student-top-nav__content-element--logout {
    margin-left: 64px;
    cursor: pointer;
    font-size: ${props => props.theme.typography.fontSizeNormal};

    &:hover {
      text-decoration: underline;
    }
  }
`

StudentTopNavigation.defaultProps = {}

export default StudentTopNavigation
