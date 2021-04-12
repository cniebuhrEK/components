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
  max-width: 300px;
  font-size: 12px;
`

export const TimeAndPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: right;
`

export const ExamHeaderTitle = styled.h1`
  color: ${props => props.theme.palette.white};
  line-height: 40px;
  font-weight: bold;
  font-size: 16pt;
`

export const TimeAndPageElement = styled.div`
  font-size: 14px;
  color: ${props => props.theme.palette.white};
  display: flex;
  align-items: center;
  cursor: pointer;

  svg {
    transform: translateY(2px);
  }

  .content {
    margin-left: 3px;
  }

  &:hover {
    color: ${props => props.theme.palette.yellow02};
  }

  &:focus,
  &:active {
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
