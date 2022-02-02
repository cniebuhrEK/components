import styled from 'styled-components'

const Scroller = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;
  height: 100%;
  width: 100%;
  scrollbar-width: thin;
  scrollbar-color: ${({ theme }) => theme.palette.headingDark}
    ${({ theme }) => theme.palette.scroller};

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background-color: ${({ theme }) => theme.palette.headingDark};
  }

  &::-webkit-scrollbar-track {
    border-radius: 3px;
    background-color: ${({ theme }) => theme.palette.scroller};
  }
`

export default Scroller
