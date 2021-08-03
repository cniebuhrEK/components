import styled from 'styled-components'

const TableBody = styled.tbody`
  box-sizing: border-box;
  display: table-row-group;
  vertical-align: middle;
  border-color: inherit;
  border-spacing: 0;
  width: 100%;
  border-collapse: separate;
  font-family: ${({ theme }) => theme.typography.fontFamily};
`

export default TableBody
