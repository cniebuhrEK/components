import styled from 'styled-components'

export default styled.table`
  border-collapse: separate;
  box-sizing: border-box;
  display: table;
  font-family: ${props => props.theme.typography.fontFamily};
  background-color: ${props => props.theme.palette.background.paper};
  font-size: 16px;
  width: 100%;
  border-spacing: 0;
`
