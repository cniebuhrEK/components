// Loader/Loader.tsx - Loader component

import styled from 'styled-components'

const Loader = styled.div`
  &,
  &:before,
  &:after {
    border-radius: 50%;
    width: ${props => props.size || 4}px;
    height: ${props => props.size || 4}px;
    animation-fill-mode: both;
    animation: load7 1.8s infinite ease-in-out;
  }

  & {
    color: inherit;
    font-size: 10px;
    position: relative;
    text-indent: -9999em;
    animation-delay: -0.16s;
    transform: translateY(${props => props.size || 4}px);
  }

  &:before,
  &:after {
    content: '';
    position: absolute;
  }
  &:before {
    left: -${props => props.size + 4 || 8}px;
    animation-delay: -0.32s;
  }
  &:after {
    left: ${props => props.size + 4 || 8}px;
  }

  @keyframes load7 {
    0%,
    80%,
    100% {
      box-shadow: 0 -${props => props.size || 4}px 0 -${props =>
          props.size / 2 || 2}px;
    }
    40% {
      box-shadow: 0 -${props => props.size || 4}px 0 0;
    }
  }
`

export default Loader
