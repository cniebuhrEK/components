import styled from 'styled-components'

export const ExamNavContainer = styled.div`
  height: 40px;
  width: 100%;
  background-color: ${props => props.theme.palette.blue02};
  color: ${props => props.theme.palette.white};
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  user-select: none;
  font-family: ${props => props.theme.typography.fontFamilySecondary};
  font-weight: 400 !important;

  a:hover {
    font-family: ${props => props.theme.typography.fontFamilySecondary};
    font-weight: 400 !important;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ExamNavRight = styled.a`
  font-size: 18.6667px;
  color: ${props => props.theme.palette.white};
  padding: 0 10px 0 10px;
  cursor: pointer;
  border-left: 1px solid ${props => props.theme.palette.white};
  margin-left: 5px;
  height: 30px;
  font-family: ${props => props.theme.typography.fontFamilySecondary};
  font-weight: 400 !important;
  display: flex;
  align-items: center;

  &.no-border {
    border: none;
  }

  svg {
    transform: translateY(2px);
  }

  svg:last-child {
    margin-left: 5px;
  }

  svg:first-child {
    margin-right: 5px;
  }

  .underline {
    text-decoration: underline;
  }

  &:hover {
    color: ${props => props.theme.palette.yellow02};
  }

  &:focus,
  &:active {
    outline: 1px solid ${props => props.theme.palette.white};
  }
`

export const ExamNavLeft = styled.a`
  font-size: 18.6667px;
  color: ${props => props.theme.palette.white};
  padding: 0 10px 0 10px;
  cursor: pointer;
  border-right: 1px solid ${props => props.theme.palette.white};
  margin-right: 5px;
  height: 30px;
  font-family: ${props => props.theme.typography.fontFamilySecondary};
  font-weight: 400 !important;
  display: flex;
  align-items: center;

  &.no-border {
    border: none;
  }

  svg {
    transform: translateY(2px);
    margin-right: 5px;
  }

  .underline {
    text-decoration: underline;
  }

  &:hover {
    color: ${props => props.theme.palette.yellow02};
  }

  &:focus,
  &:active {
    outline: 1px solid ${props => props.theme.palette.white};
  }
`
