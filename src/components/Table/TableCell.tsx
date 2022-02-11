import styled from 'styled-components'

const TableCell = styled.td`
  box-sizing: border-box;
  display: table-cell;
  vertical-align: middle;
  border-spacing: 0;
  text-align: ${({ align }) => align || 'left'};
  border-collapse: separate;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  padding: 7px 18px;
  line-height: 37px;
  border-color: ${({ theme }) => theme.palette.grey09};
  border-width: 0 0 1px;
  border-style: solid;
  position: relative;
`

export default TableCell
