import styled from 'styled-components'

export default styled.thead`
  box-sizing: border-box;
  display: table-header-group;
  vertical-align: middle;
  border-color: inherit;
  border-spacing: 0;
  width: 100%;
  border-collapse: separate;
  font-family: ${props => props.theme.typography.fontFamily};
  font-size: ${props => props.theme.typography.fontSizeNormal};
`
