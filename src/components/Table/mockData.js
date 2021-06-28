// Table/mockData.js - Table seed data for story

import React from 'react'
import Button from '../Button/Button'
import { EditIcon } from '../../icons'

export const headers = [
  {
    columnId: 'firstname',
    sortable: true,
    id: 'firstname',
    children: 'First Name'
  },
  {
    columnId: 'lastname',
    sortable: false,
    id: 'lastname',
    children: 'Last Name'
  },
  {
    columnId: 'role',
    sortable: true,
    id: 'role',
    children: 'Role'
  },
  {
    columnId: 'number',
    sortable: true,
    id: 'number',
    children: 'Number',
    align: 'right'
  },
  {
    columnId: 'actions',
    sortable: false,
    id: 'actions',
    children: 'Actions'
  }
]

export const rows = [
  {
    id: 'John',
    cells: [
      {
        columnId: 'firstname',
        cellProps: {},
        children: 'John'
      },
      {
        columnId: 'lastname',
        cellProps: {},
        children: 'Doe'
      },
      {
        columnId: 'role',
        cellProps: {},
        children: 'Master'
      },
      {
        columnId: 'number',
        cellProps: { align: 'right' },
        children: '2'
      },
      {
        columnId: 'action',
        cellProps: {},
        children: (
          <Button
            id='edit-exam'
            name='edit'
            size='small'
            variant='outlined'
            color='green'
            onClick={() => {}}
            startIcon={<EditIcon />}
          >
            Edit
          </Button>
        )
      }
    ]
  },
  {
    id: 'Ann',
    cells: [
      {
        columnId: 'firstname',
        cellProps: {},
        children: 'Ann'
      },
      {
        columnId: 'lastname',
        cellProps: {},
        children: 'Smith'
      },
      {
        columnId: 'role',
        cellProps: {},
        children: 'Employee'
      },
      {
        columnId: 'number',
        cellProps: { align: 'right' },
        children: '2'
      },
      {
        columnId: 'action',
        cellProps: {},
        children: (
          <Button
            id='edit-exam'
            name='edit'
            size='small'
            variant='outlined'
            color='green'
            onClick={() => {}}
            startIcon={<EditIcon />}
          >
            Edit
          </Button>
        )
      }
    ]
  },
  {
    id: 'Barbara',
    cells: [
      {
        columnId: 'firstname',
        cellProps: {},
        children: 'Barbara'
      },
      {
        columnId: 'lastname',
        cellProps: {},
        children: 'Black'
      },
      {
        columnId: 'role',
        cellProps: {},
        children: 'Employee'
      },
      {
        columnId: 'number',
        cellProps: { align: 'right' },
        children: '2'
      },
      {
        columnId: 'action',
        cellProps: {},
        children: (
          <Button
            id='edit-exam'
            name='edit'
            size='small'
            variant='outlined'
            color='green'
            onClick={() => {}}
            startIcon={<EditIcon />}
          >
            Edit
          </Button>
        )
      }
    ]
  },
  {
    id: 'Sandra',
    cells: [
      {
        columnId: 'firstname',
        cellProps: {},
        children: 'Sandra'
      },
      {
        columnId: 'lastname',
        cellProps: {},
        children: 'Doe'
      },
      {
        columnId: 'role',
        cellProps: {},
        children: 'Master'
      },
      {
        columnId: 'number',
        cellProps: { align: 'right' },
        children: '2'
      },
      {
        columnId: 'action',
        cellProps: {},
        children: (
          <Button
            id='edit-exam'
            name='edit'
            size='small'
            variant='outlined'
            color='green'
            onClick={() => {}}
            startIcon={<EditIcon />}
          >
            Edit
          </Button>
        )
      }
    ]
  },
  {
    id: 'Annabelle',
    cells: [
      {
        columnId: 'firstname',
        cellProps: {},
        children: 'Annabelle'
      },
      {
        columnId: 'lastname',
        cellProps: {},
        children: 'Smith'
      },
      {
        columnId: 'role',
        cellProps: {},
        children: 'Employee'
      },
      {
        columnId: 'number',
        cellProps: { align: 'right' },
        children: '2'
      },
      {
        columnId: 'action',
        cellProps: {},
        children: (
          <Button
            id='edit-exam'
            name='edit'
            size='small'
            variant='outlined'
            color='green'
            onClick={() => {}}
            startIcon={<EditIcon />}
          >
            Edit
          </Button>
        )
      }
    ]
  },
  {
    id: 'Jayda',
    cells: [
      {
        columnId: 'firstname',
        cellProps: {},
        children: 'Jayda'
      },
      {
        columnId: 'lastname',
        cellProps: {},
        children: 'Black'
      },
      {
        columnId: 'role',
        cellProps: {},
        children: 'Employee'
      },
      {
        columnId: 'number',
        cellProps: { align: 'right' },
        children: '2'
      },
      {
        columnId: 'action',
        cellProps: {},
        children: (
          <Button
            id='edit-exam'
            name='edit'
            size='small'
            variant='outlined'
            color='green'
            onClick={() => {}}
            startIcon={<EditIcon />}
          >
            Edit
          </Button>
        )
      }
    ]
  },
  {
    id: 'Aaron',
    cells: [
      {
        columnId: 'firstname',
        cellProps: {},
        children: 'Aaron'
      },
      {
        columnId: 'lastname',
        cellProps: {},
        children: 'Doe'
      },
      {
        columnId: 'role',
        cellProps: {},
        children: 'Master'
      },
      {
        columnId: 'number',
        cellProps: { align: 'right' },
        children: '2'
      },
      {
        columnId: 'action',
        cellProps: {},
        children: (
          <Button
            id='edit-exam'
            name='edit'
            size='small'
            variant='outlined'
            color='green'
            onClick={() => {}}
            startIcon={<EditIcon />}
          >
            Edit
          </Button>
        )
      }
    ]
  },
  {
    id: 'Michael',
    cells: [
      {
        columnId: 'firstname',
        cellProps: {},
        children: 'Michael'
      },
      {
        columnId: 'lastname',
        cellProps: {},
        children: 'Smith'
      },
      {
        columnId: 'role',
        cellProps: {},
        children: 'Employee'
      },
      {
        columnId: 'number',
        cellProps: { align: 'right' },
        children: '2'
      },
      {
        columnId: 'action',
        cellProps: {},
        children: (
          <Button
            id='edit-exam'
            name='edit'
            size='small'
            variant='outlined'
            color='green'
            onClick={() => {}}
            startIcon={<EditIcon />}
          >
            Edit
          </Button>
        )
      }
    ]
  },
  {
    id: 'Terry',
    cells: [
      {
        columnId: 'firstname',
        cellProps: {},
        children: 'Terry'
      },
      {
        columnId: 'lastname',
        cellProps: {},
        children: 'Black'
      },
      {
        columnId: 'role',
        cellProps: {},
        children: 'Employee'
      },
      {
        columnId: 'number',
        cellProps: { align: 'right' },
        children: '2'
      },
      {
        columnId: 'action',
        cellProps: {},
        children: (
          <Button
            id='edit-exam'
            name='edit'
            size='small'
            variant='outlined'
            color='green'
            onClick={() => {}}
            startIcon={<EditIcon />}
          >
            Edit
          </Button>
        )
      }
    ]
  },
  {
    id: 'Jake',
    cells: [
      {
        columnId: 'firstname',
        cellProps: {},
        children: 'Jake'
      },
      {
        columnId: 'lastname',
        cellProps: {},
        children: 'Doe'
      },
      {
        columnId: 'role',
        cellProps: {},
        children: 'Master'
      },
      {
        columnId: 'number',
        cellProps: { align: 'right' },
        children: '2'
      },
      {
        columnId: 'action',
        cellProps: {},
        children: (
          <Button
            id='edit-exam'
            name='edit'
            size='small'
            variant='outlined'
            color='green'
            onClick={() => {}}
            startIcon={<EditIcon />}
          >
            Edit
          </Button>
        )
      }
    ]
  }
]
