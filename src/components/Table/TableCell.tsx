import styled from 'styled-components'

const TableCell = styled.td`
  box-sizing: border-box;
  display: table-cell;
  vertical-align: middle;
  border-spacing: 0;
  text-align: ${({ align }) => align || 'left'};
  border-collapse: separate;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  padding: 8px;
  line-height: 37px;
  border-color: ${({ theme }) => theme.colors.table.border};
  border-width: 0 0 1px;
  border-style: solid;
  position: relative;

  &:last-child,
  &:first-child {
    padding: 8px 0;
  }
`

export default TableCell
