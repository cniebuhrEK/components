import styled from 'styled-components'

export default styled.p`
  margin: 0;
  font-weight: 600;
  font-size: ${props => {
    switch (true) {
      case props.size === 'xs':
        return props.theme.typography.fontSizeExtraSmall
      case props.size === 's':
        return props.theme.typography.fontSizeSmall
      case props.size === 'm':
      default:
        return props.theme.typography.fontSizeNormal
    }
  }};
  line-height: 19px;
  letter-spacing: -0.00450187px;
  color: ${props => props.theme.palette.gray1};
`
