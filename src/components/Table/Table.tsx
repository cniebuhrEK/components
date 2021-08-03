import styled from 'styled-components'

export default styled.table`
  border-collapse: separate;
  box-sizing: border-box;
  display: table;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  border-radius: ${({ theme }) => theme.shape.borderRadiusBig};
  width: 100%;
  border-spacing: 0;
  font-size: ${({ size, theme }) => {
    switch (true) {
      case size === 'xs':
        return theme.typography.fontSizeExtraSmall
      case size === 'm':
        return theme.typography.fontSizeNormal
      case size === 's':
      default:
        return theme.typography.fontSizeSmall
    }
  }};

  tbody,
  tfoot,
  thead,
  th,
  td,
  tr,
  div {
    font-size: ${({ theme, size }) => {
      switch (true) {
        case size === 'xs':
          return theme.typography.fontSizeExtraSmall
        case size === 'm':
          return theme.typography.fontSizeNormal
        case size === 's':
        default:
          return theme.typography.fontSizeSmall
      }
    }};
  }

  td {
    &:first-child {
      margin-left: ${({ size }) => {
        switch (true) {
          case size === 'm':
            return '40px'
          case size === 's':
          case size === 'xs':
          default:
            return '32px'
        }
      }};
    }

    &:last-child {
      margin-right: ${({ size }) => {
        switch (true) {
          case size === 'm':
            return '40px'
          case size === 's':
          case size === 'xs':
          default:
            return '32px'
        }
      }};
    }
  }
`
