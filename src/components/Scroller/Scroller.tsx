import styled from 'styled-components'

const Scroller = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;
  height: 100%;
  width: 100%;
  scrollbar-width: thin;
  scrollbar-color: ${({ theme }) => theme.palette.scrollerThumb}
    ${({ theme }) => theme.palette.scroller};

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background-color: ${({ theme }) => theme.palette.scrollerThumb};
  }

  &::-webkit-scrollbar-track {
    border-radius: 6px;
    background-color: ${({ theme }) => theme.palette.scroller};
  }
`

export default Scroller
