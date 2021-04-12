import styled from 'styled-components'

export const ToolsBarContainer = styled.div`
  height: 45px;
  width: 100%;
  background-color: ${props => props.theme.palette.blue01};
  color: ${props => props.theme.palette.white};
  border-top: 2px solid ${props => props.theme.palette.white};
  border-bottom: 2px solid ${props => props.theme.palette.white};
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
