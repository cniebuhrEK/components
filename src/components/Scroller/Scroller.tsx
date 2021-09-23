import styled from 'styled-components'

const Scroller = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;
  height: 100%;
  width: 100%;
  scrollbar-width: thin;
  scrollbar-color: ${({ theme }) => theme.palette.brown01}
    ${({ theme }) => theme.palette.brown09};

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background-color: ${({ theme }) => theme.palette.brown01};
  }

  &::-webkit-scrollbar-track {
    border-radius: 3px;
    background-color: ${({ theme }) => theme.palette.brown09};
  }
`

export default Scroller
