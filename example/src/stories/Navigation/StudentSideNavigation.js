import React from 'react'
import PropTypes from 'prop-types'

import { StudentSideNavigation as StudentSideNavigationComponent } from 'components'

export const StudentSideNavigation = props => {
  return <StudentSideNavigationComponent {...props} />
}

StudentSideNavigation.propTypes = {
  links: PropTypes.array
}

StudentSideNavigation.defaultProps = {
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
