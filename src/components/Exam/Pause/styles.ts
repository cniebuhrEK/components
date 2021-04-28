import styled from 'styled-components'

export const PauseExamContainer = styled.div`
  user-select: none;
  height: 28px;
  width: 100%;
  background-color: ${props => props.theme.palette.grey08};
  color: ${props => props.theme.palette.white};
  padding: 0 20px;
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
  font-family: 'Greek Letters', Verdana, Geneva, sans-serif;
  font-size: 12pt;
  text-decoration: none;
`
