import styled from 'styled-components'

export default styled.table`
  border-collapse: separate;
  box-sizing: border-box;
  display: table;
  font-family: ${props => props.theme.typography.fontFamily};
  font-size: 14px;
  width: 100%;
  border-spacing: 0;
`
