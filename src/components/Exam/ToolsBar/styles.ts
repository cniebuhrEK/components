import styled from 'styled-components'

export const ToolsBarContainer = styled.div`
  height: 41px;
  width: 100%;
  background-color: ${props => props.theme.exam.original.blue01};
  color: ${props => props.theme.exam.original.white};
  border-top: 2px solid ${props => props.theme.exam.original.white};
  border-bottom: 2px solid ${props => props.theme.exam.original.white};
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  user-select: none;
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
