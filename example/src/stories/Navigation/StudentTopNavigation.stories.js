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
  avatar: '/assets/illustrations/AvatarPlaceholder.png',
  logoutName: 'Log out',
  handleLogout: () => {}
}
