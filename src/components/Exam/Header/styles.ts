import styled from 'styled-components'

export const ExamHeaderContainer = styled.div`
  user-select: none;
  height: 45px;
  width: 100%;
  background-color: ${props => props.theme.palette.blue02};
  color: ${props => props.theme.palette.white};
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  font-family: ${props => props.theme.typography.fontFamilySecondary};
`

export const NotOfficialMCATContainer = styled.div`
  height: 100%;
  background-color: ${props => props.theme.palette.green02};
  color: ${props => props.theme.palette.white};
  padding: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  text-align: center;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  max-width: 330px;
  font-size: 14.66px;
  font-family: ${props => props.theme.typography.fontFamilySecondary};
`

export const TimeAndPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: right;
  font-family: ${props => props.theme.typography.fontFamilySecondary};
`

export const ExamHeaderTitle = styled.h1`
  color: ${props => props.theme.palette.white};
  line-height: 45px;
  font-weight: 400 !important;
  font-size: 21.33px;
  font-family: ${props => props.theme.typography.fontFamilySecondary};
  text-shadow: ${props => props.theme.shadows.textShadow};
`

export const TimeAndPageElement = styled.a`
  font-size: 14.66px;
  color: ${props => props.theme.palette.white};
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  font-family: ${props => props.theme.typography.fontFamilySecondary};
  font-weight: 400 !important;
  line-height: 20px !important;
  outline: 1px solid transparent;

  svg {
    transform: translateY(2px);
    height: 20px;
  }

  .content {
    margin-left: 3px;
  }

  &:hover {
    color: ${props => props.theme.palette.yellow02};
    text-decoration: none;
    font-weight: 400 !important;
  }

  &:focus,
  &:active {
    color: ${props => props.theme.palette.yellow02};
    outline: 1px solid ${props => props.theme.palette.white};
  }

  &.--condensed {
    .content {
      display: none;
    }
  }

  &.--warning {
    color: ${props => props.theme.palette.yellow02};
  }

  &.--hidden {
    visibility: hidden;
  }
`
