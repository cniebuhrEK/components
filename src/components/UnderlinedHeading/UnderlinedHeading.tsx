// UnderlinedHeading/UnderlinedHeading.tsx - Underlined Heading component

import styled from 'styled-components'

export const UnderlinedHeading = styled.div`
  position: relative;
  display: inline-block;
  font-size: 11px;
  line-height: 15px;
  letter-spacing: -0.1px;
  color: ${({ theme }) => theme.palette.brown01};

  &::after {
    position: absolute;
    bottom: -5px;
    left: 0;
    height: 2px;
    width: calc(100% + 40px);
    content: '';
    opacity: ${({ excludeBorder }) => (excludeBorder ? 0 : 1)};
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.palette.brown01},
      rgba(255, 255, 255, 0)
    );
  }
`

export default UnderlinedHeading
