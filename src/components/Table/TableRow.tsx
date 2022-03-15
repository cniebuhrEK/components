import styled from 'styled-components'

const TableRow = styled.tr`
  color: inherit;
  display: table-row;
  outline: 0;
  vertical-align: middle;
  box-sizing: border-box;
  width: 100%;
  border-spacing: 0;
  border-collapse: separate;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  border-style: inherit;
  border-width: 0 0 1px;
  border-color: inherit;
`

TableRow.defaultProps = {
  highlight: false
}

export default TableRow
