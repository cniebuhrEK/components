import styled from 'styled-components'

export default styled.div`
  animation: skeleton-loading 1s linear infinite alternate;
  width: 100%;
  min-height: ${({ minHeight }) => minHeight || '200px'};
  height: 100%;
  max-height: ${({ maxHeight }) => maxHeight || '500px'};
  border-radius: 4px;

  @keyframes skeleton-loading {
    0% {
      background: ${({ theme }) => theme.colors.main.white};
    }
    100% {
      background: ${({ theme }) => theme.colors.main.grey200};
    }
  }
`
