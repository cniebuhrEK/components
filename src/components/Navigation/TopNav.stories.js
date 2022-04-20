// Navigation/Student/TopNav.stories.js - TopNav story

import React from 'react'
import TopNav from './TopNav'
import BooksContainedIcon from '../../icons/BooksContained'
import DashboardIcon from '../../icons/Dashboard'
import GamesIcon from '../../icons/Games'
import VideoCameraIcon from '../../icons/VideoCamera'
import ExamEditorIcon from '../../icons/ExamEditor'
import LogoutIcon from '../../icons/Logout'

const Template = args => <TopNav {...args} />

export const TopNavigation = Template.bind({})
TopNavigation.args = {
  avatar: '',
  menu: 'Menu',
  greeting: 'Hi, Jack!',
  showCrackUniversityLogo: true,
  links: [
    {
      label: 'Dashboard',
      icon: <DashboardIcon />,
      url: '#'
    },
    {
      label: 'Books',
      icon: <BooksContainedIcon />,
      url: '',
      nextLevel: [
        {
          label: 'Biology',
          url: '',
          isInactive: true,
          tooltip: 'Definition why this is inactive',
          nextLevel: [
            {
              label: '1',
              url: '/1'
            },
            {
              label: '2',
              url: '/2'
            },
            {
              label: '3',
              url: '/3'
            }
          ]
        },
        {
          label: 'Physics',
          url: '',
          isInactive: false,
          nextLevel: [
            {
              label: '1',
              url: '/1'
            },
            {
              label: '2',
              url: '/2',
              isInactive: true,
              tooltip: 'Definition why this is inactive'
            },
            {
              label: '3',
              url: '/3',
              isInactive: true,
              tooltip: 'Definition why this is inactive'
            }
          ]
        },
        {
          label: 'Chemistry',
          url: '',
          tooltip: 'Normal tooltip',
          nextLevel: [
            {
              label: '1',
              url: '/1'
            },
            {
              label: '2',
              url: '/2'
            }
          ]
        }
      ]
    },
    {
      label: 'Games',
      tooltip: 'Normal tooltip',
      icon: <GamesIcon />,
      url: '#'
    },
    {
      label: 'Videos',
      icon: <VideoCameraIcon />,
      url: '#'
    },
    {
      label: 'Practice Exams',
      url: '',
      icon: <ExamEditorIcon />,
      nextLevel: [
        {
          label: 'Mini',
          url: '#'
        },
        {
          label: 'Full',
          url: '#'
        }
      ]
    },
    {
      label: 'Log Out',
      icon: <LogoutIcon />,
      url: '#'
    }
  ]
}

export default {
  title: 'Layout/Navigation/Student',
  component: TopNav
}
