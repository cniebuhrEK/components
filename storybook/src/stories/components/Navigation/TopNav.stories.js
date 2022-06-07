import React from 'react'
import {
  Navigation,
  BooksContainedIcon,
  DashboardIcon,
  NotesIcon,
  FlashcardsIcon,
  VideoCameraIcon,
  ExamEditorIcon,
  LogoutIcon
} from 'examkrackers-components'

const Template = args => <Navigation {...args} />

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
      url: '#',
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
      label: 'Videos',
      icon: <VideoCameraIcon />,
      url: '#'
    },
    {
      label: 'Flashcards',
      icon: <FlashcardsIcon />,
      url: '#'
    },
    {
      label: 'Notes',
      icon: <NotesIcon />,
      url: '#'
    },
    {
      label: 'Practice Exams',
      icon: <ExamEditorIcon />,
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
  component: Navigation
}
