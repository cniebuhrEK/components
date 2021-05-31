import React from 'react'

import { AdminTopNavigation as AdminTopNavigationComponent } from './AdminTopNavigation'

export default {
  title: 'Atoms/Navigation',
  component: AdminTopNavigationComponent
}

const Template = args => <AdminTopNavigationComponent {...args} />

export const AdminTopNavigation = Template.bind({})
AdminTopNavigation.args = {
  username: 'Hi, user@examkrackres.com',
  logoutName: 'Log out',
  handleLogout: () => {}
}
