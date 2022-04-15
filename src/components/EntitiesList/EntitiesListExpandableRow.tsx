import React, { useState } from 'react'
import { propOr } from 'ramda'
import TableRow from '../../components/Table/TableRow'
import TableCell from '../../components/Table/TableCell'
import ArrowDownIcon from '../../icons/ArrowDown'
import { isNotNilOrEmpty } from '../../utils/ramda'
import styled, { css } from 'styled-components'

const EntitiesListExpandableRow = ({ row }) => {
  const [open, setOpen] = useState(false)
  const children = propOr([], 'children', row)
  const cells = [...propOr([], 'cells', row)]
  const firstCell = cells.shift()

  const toggleOpen = () => setOpen(prev => !prev)
  return open ? (
    // @ts-ignore
    <>
      <TableRow id={row.id} className={`${row.level}${open ? ' shadow' : ''}`}>
        <TableCell key={firstCell.columnId} {...firstCell.cellProps}>
          <FirstCellInRowContent onClick={toggleOpen}>
            {firstCell.children}
            {isNotNilOrEmpty(children) && <StyledArrowIcon open={open} />}
          </FirstCellInRowContent>
        </TableCell>
        {cells.map(cell => (
          <TableCell key={cell.columnId} {...cell.cellProps}>
            {cell.children}
          </TableCell>
        ))}
      </TableRow>
      {children.map((child, index) => {
        const childCells = [...propOr([], 'cells', child)]
        return (
          <TableRow
            id={child.id}
            key={`${child.id}-${index}`}
            className={child.level}
          >
            {childCells.map(cell => (
              <TableCell key={cell.columnId} {...cell.cellProps}>
                {cell.children}
              </TableCell>
            ))}
          </TableRow>
        )
      })}
    </>
  ) : (
    <TableRow id={row.id} className={row.level}>
      <TableCell key={firstCell.columnId} {...firstCell.cellProps}>
        <FirstCellInRowContent onClick={toggleOpen}>
          {firstCell.children}
          {isNotNilOrEmpty(children) && <StyledArrowIcon open={open} />}
        </FirstCellInRowContent>
      </TableCell>
      {cells.map(cell => (
        <TableCell key={cell.columnId} {...cell.cellProps}>
          {cell.children}
        </TableCell>
      ))}
    </TableRow>
  )
}

export default EntitiesListExpandableRow

const FirstCellInRowContent = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`

const StyledArrowIcon = styled(ArrowDownIcon)`
  margin-left: 5px;
  font-size: 30px;
  color: ${({ theme }) => theme.colors.main.primary500};
  ${({ open }) =>
    open &&
    css`
      transform: rotate(-180deg);
    `}
`
