import React from 'react'

import { StudentTopNavigation as StudentTopNavigationComponent } from './StudentTopNavigation'

export default {
  title: 'Atoms/Navigation',
  component: StudentTopNavigationComponent
}

const Template = args => <StudentTopNavigationComponent {...args} />

export const StudentTopNavigation = Template.bind({})
StudentTopNavigation.args = {
  username: 'username',
  avatar:
    'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
  logoutName: 'Log out',
  handleLogout: () => {}
}
