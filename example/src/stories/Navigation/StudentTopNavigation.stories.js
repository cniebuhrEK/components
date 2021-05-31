import React from 'react'

import { StudentTopNavigation as StudentTopNavigationComponent } from './StudentTopNavigation'

export default {
  title: 'Atoms/Navigation',
  component: StudentTopNavigationComponent
}

const Template = args => <StudentTopNavigationComponent {...args} />

export const StudentTopNavigation = Template.bind({})
StudentTopNavigation.args = {
  username: 'Hi, Username',
  logoutName: 'Log out',
  handleLogout: () => {}
}
