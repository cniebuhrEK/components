import styled from 'styled-components'

export default styled.div`
  margin-top: 16px;
  ${({ isTop }) => isTop && 'margin-bottom: 16px'};
  display: flex;
  align-items: center;
  justify-content: flex-end;

  & > div + div {
    margin-left: 10px;
  }
`
