import styled from 'styled-components'

const TableFoot = styled.tfoot`
  box-sizing: border-box;
  display: table-footer-group;
  vertical-align: middle;
  border-color: inherit;
  border-spacing: 0;
  width: 100%;
  border-collapse: separate;
  font-family: ${({ theme }) => theme.typography.fontFamily};

  td {
    border: none;
  }
`

export default TableFoot
