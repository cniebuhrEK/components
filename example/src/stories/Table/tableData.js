import React from 'react'
import { Button, EditIcon } from 'components'

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
    id: 'Barbra',
    cells: [
      {
        columnId: 'firstname',
        cellProps: {},
        children: 'Barbra'
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
    id: 'Barbra',
    cells: [
      {
        columnId: 'firstname',
        cellProps: {},
        children: 'Barbra'
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
    id: 'Barbra',
    cells: [
      {
        columnId: 'firstname',
        cellProps: {},
        children: 'Barbra'
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
  }
]
