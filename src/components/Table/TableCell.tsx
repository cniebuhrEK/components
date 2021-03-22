import styled from 'styled-components'

export default styled.td`
  box-sizing: border-box;
  display: table-cell;
  vertical-align: middle;
  border-spacing: 0;
  text-align: center;
  border-collapse: separate;
  font-family: ${props => props.theme.typography.fontFamily};
  font-size: 14px;
  padding: 10px 0;
  border-color: ${props => props.theme.palette.common.gray400};
  border-width: 0 0 1px;
  border-style: solid;
`
