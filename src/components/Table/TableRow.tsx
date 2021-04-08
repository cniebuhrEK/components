import styled from 'styled-components'

export default styled.tr`
  color: inherit;
  display: table-row;
  outline: 0;
  vertical-align: middle;
  box-sizing: border-box;
  width: 100%;
  border-spacing: 0;
  border-collapse: separate;
  transition: background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1) 0s;
  font-family: ${props => props.theme.typography.fontFamily};
  font-size: ${props => props.theme.typography.fontSizeNormal};
  border-style: inherit;
  border-width: 0 0 1px;
  border-color: inherit;
`
