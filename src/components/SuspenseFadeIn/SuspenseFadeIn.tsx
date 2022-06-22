import React, { Suspense } from 'react'
import SkeletonLoader from 'components/SkeletonLoader'
import styled from 'styled-components'

interface SuspenseFadeInProps {
  children: JSX.Element | JSX.Element[]
  minHeight?: string
  maxHeight?: string
}

export const SuspenseFadeIn = (props: SuspenseFadeInProps): JSX.Element => {
  const { children, ...rest } = props

  return (
    <Suspense fallback={<SkeletonLoader {...rest} />}>
      <Container>
        {children}
      </Container>
    </Suspense>
  )
}

export default SuspenseFadeIn

const Container = styled.div`
  width: 100%;
  height: 100%;
  animation: opacity-fade-in 2s ease-in;

  @keyframes opacity-fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`
