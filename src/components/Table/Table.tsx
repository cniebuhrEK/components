import styled from 'styled-components'

export default styled.table`
  border-collapse: separate;
  box-sizing: border-box;
  display: table;
  font-family: ${props => props.theme.typography.fontFamily};
  background-color: ${props => props.theme.palette.biege};
  border-radius: ${props => props.theme.shape.borderRadiusBig};
  width: 100%;
  border-spacing: 0;
  padding: ${props => {
    switch (true) {
      case props.size === 'm':
        return '40px'
      case props.size === 's':
      case props.size === 'xs':
      default:
        return '32px'
    }
  }};
  font-size: ${props => {
    switch (true) {
      case props.size === 'xs':
        return props.theme.typography.fontSizeExtraSmall
      case props.size === 'm':
        return props.theme.typography.fontSizeNormal
      case props.size === 's':
      default:
        return props.theme.typography.fontSizeSmall
    }
  }};

  tbody,
  tfoot,
  thead,
  th,
  td,
  tr,
  div {
    font-size: ${props => {
      switch (true) {
        case props.size === 'xs':
          return props.theme.typography.fontSizeExtraSmall
        case props.size === 'm':
          return props.theme.typography.fontSizeNormal
        case props.size === 's':
        default:
          return props.theme.typography.fontSizeSmall
      }
    }};
  }

  td {
    &:first-child {
      margin-left: ${props => {
        switch (true) {
          case props.size === 'm':
            return '40px'
          case props.size === 's':
          case props.size === 'xs':
          default:
            return '32px'
        }
      }};
    }

    &:last-child {
      margin-right: ${props => {
        switch (true) {
          case props.size === 'm':
            return '40px'
          case props.size === 's':
          case props.size === 'xs':
          default:
            return '32px'
        }
      }};
    }
  }
`
