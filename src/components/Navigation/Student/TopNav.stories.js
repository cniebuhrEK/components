// Navigation/Student/TopNav.stories.js - TopNav story

import React from 'react'
import TopNav from './TopNav'
import BooksContainedIcon from '../../../icons/BooksContained'
import DashboardIcon from '../../../icons/Dashboard'
import GamesIcon from '../../../icons/Games'
import VideoCameraIcon from '../../../icons/VideoCamera'
import ExamEditorIcon from '../../../icons/ExamEditor'
import LogoutIcon from '../../../icons/Logout'

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
          label: 'Chemistry',
          url: '',
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
      label: 'Projections',
      url: '#'
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
