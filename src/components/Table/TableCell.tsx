import styled from 'styled-components'

export default styled.td`
  box-sizing: border-box;
  display: table-cell;
  vertical-align: middle;
  border-spacing: 0;
  text-align: left;
  border-collapse: separate;
  font-family: ${props => props.theme.typography.fontFamily};
  font-size: 16px;
  padding: 21px 0;
  border-color: ${props => props.theme.palette.common.gray300};
  border-width: 0 0 1px;
  border-style: solid;

  &:first-child {
    padding-left: 24px;
  }

  &:last-child {
    padding-right: 24px;
  }
`
