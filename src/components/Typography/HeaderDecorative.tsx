import styled from 'styled-components'

export default styled.h1`
  margin: 0;
  font-weight: 900;
  font-size: 48px;
  line-height: 66px;
  letter-spacing: 0px;
  color: ${({ theme }) => theme.palette.headingDark};
  font-family: ${({ theme }) => theme.typography.fontFamily};
`
