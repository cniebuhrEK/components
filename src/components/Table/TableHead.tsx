import styled from 'styled-components'

const TableHead = styled.thead`
  box-sizing: border-box;
  display: table-header-group;
  vertical-align: middle;
  border-color: inherit;
  border-spacing: 0;
  width: 100%;
  border-collapse: separate;
  font-family: ${({ theme }) => theme.typography.fontFamily};
`

export default TableHead
