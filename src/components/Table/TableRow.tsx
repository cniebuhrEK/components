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
  transition: background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1) 0s;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  border-style: inherit;
  border-width: 0 0 1px;
  border-color: inherit;

  ${({ highlight }) => !highlight} {
    &:hover {
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
    }
  }
`

TableRow.defaultProps = {
  highlight: false
}

export default TableRow
