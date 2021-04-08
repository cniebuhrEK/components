import styled from 'styled-components'

export default styled.td`
  box-sizing: border-box;
  display: table-cell;
  vertical-align: middle;
  border-spacing: 0;
  text-align: left;
  border-collapse: separate;
  font-family: ${props => props.theme.typography.fontFamily};
  font-size:  ${props => props.theme.typography.fontSizeSmall};
  padding: 18px;
  border-color: ${props => props.theme.palette.grey09};
  border-width: 0 0 1px;
  border-style: solid;

  &:first-child {
    margin-left: 40px;
  }

  &:last-child {
    margin-right-right: 24px;
  }
`
