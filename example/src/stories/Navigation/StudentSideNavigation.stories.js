import React from 'react'
import { StudentSideNavigation as Component } from './StudentSideNavigation'
// import { UserIcon } from 'components'

export default {
  title: 'Atoms/Navigation',
  component: Component
}

const Template = args => <Component {...args} />

export const StudentSideNavigation = Template.bind({})
StudentSideNavigation.args = {
  links: [
    {
      exam_id: 12,
      title: 'EK-1',
      type: 'full length exam',
      sections: [
        {
          title: 'Chem & phys',
          id: 34
        },
        {
          title: 'CARS',
          id: 56
        },
        {
          title: 'Bio',
          id: 78
        },
        {
          title: 'Psych',
          id: 90
        }
      ]
    },
    {
      exam_id: 12,
      title: 'EK-1',
      type: 'full length exam',
      sections: [
        {
          title: 'Chem & phys',
          id: 34
        },
        {
          title: 'CARS',
          id: 56
        },
        {
          title: 'Bio',
          id: 78
        },
        {
          title: 'Psych',
          id: 90
        }
      ]
    },
    {
      exam_id: 12,
      title: 'EK-1',
      type: 'full length exam',
      sections: [
        {
          title: 'Chem & phys',
          id: 34
        },
        {
          title: 'CARS',
          id: 56
        },
        {
          title: 'Bio',
          id: 78
        },
        {
          title: 'Psych',
          id: 90
        }
      ]
    }
  ]
}
