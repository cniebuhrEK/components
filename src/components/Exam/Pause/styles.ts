import styled from 'styled-components'

export const PauseExamContainer = styled.div`
  user-select: none;
  height: 28px;
  width: 100%;
  background-color: ${props => props.theme.exam.original.grey08};
  color: ${props => props.theme.exam.original.white};
  flex: none;
`

export const PauseButton = styled.a`
  background-color: ${props => props.theme.exam.original.grey10};
  position: relative;
  color: ${props => props.theme.exam.original.black};
  width: 50px;
  border: 1px solid ${props => props.theme.exam.original.white};
  padding: 0 10px;
  cursor: pointer;
  font-size: 16px;
  text-decoration: none;
  left: 50%;
  margin-left: -25px;
  top: 7px;
`
