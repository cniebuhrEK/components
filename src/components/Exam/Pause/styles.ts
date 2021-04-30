import styled from 'styled-components'

export const PauseExamContainer = styled.div`
  user-select: none;
  min-height: 28px;
  width: 100%;
  background-color: ${props => props.theme.palette.grey08};
  color: ${props => props.theme.palette.white};
  padding: 2px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const PauseButton = styled.a`
  background-color: ${props => props.theme.palette.grey10};
  position: relative;
  color: ${props => props.theme.palette.black};
  min-width: 50px;
  border: 1px solid ${props => props.theme.palette.white};
  padding: 0 10px;
  cursor: pointer;
  font-size: 16px;
  text-decoration: none;

  &:hover {
    font-weight: 600;
    text-decoration: underline;
  }
`
