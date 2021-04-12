import styled from 'styled-components'

export default styled.tbody`
  box-sizing: border-box;
  display: table-row-group;
  vertical-align: middle;
  border-color: inherit;
  border-spacing: 0;
  width: 100%;
  border-collapse: separate;
  font-family: ${props => props.theme.typography.fontFamily};

  tr {
    cursor: pointer;

    &:hover {
      background-color: ${props => props.theme.palette.grey10};
    }
  }
`
