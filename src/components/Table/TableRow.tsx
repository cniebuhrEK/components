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

  &.level-1 {
    background: #fef6eb;
    & > td:first-of-type {
      border-left: 4px solid ${({ theme }) => theme.colors.main.primary500} !important;
      padding-left: 35px !important;
    }
  }

  &.level-2 {
    background: #feedd7;
    & > td:first-of-type {
      border-left: 4px solid ${({ theme }) => theme.colors.main.secondary600} !important;
      padding-left: 50px !important;
    }
  }

  &.shadow {
    position: relative;
    z-index: 1;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`

TableRow.defaultProps = {
  highlight: false
}

export default TableRow
