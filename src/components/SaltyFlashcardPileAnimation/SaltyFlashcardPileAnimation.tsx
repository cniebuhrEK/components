import React, { useState, useEffect } from 'react'
import Lottie from 'react-lottie'
import styled from 'styled-components'
import * as R from 'ramda'

import leafblowerJSON from './json/leafblower.json'
import tossJSON from './json/toss.json'

import { getPileImageByCardsNumber } from './pile'
// import { getIconImageByCardsNumber } from './icon'

const getArrayOfSummingNumbers = (number, divider) => {
  const multiplier = Math.floor(R.divide(number, divider))
  const modulo = R.modulo(number, divider)

  return R.pipe(R.repeat(divider), R.append(modulo))(multiplier)
}

const DIVIDER = 1000

export const SaltyFlashcardPileAnimation = ({
  cardsNumber
}: {
  cardsNumber: number
}): JSX.Element => {
  const [tossRunning, setTossRunning] = useState(false)
  const [updateCurrentNumber, setUpdateCurrentNumber] = useState(false)
  const [leafblowerRunning, setLeafblowerRunning] = useState(false)
  const [currentNumber, setCurrentNumber] = useState(cardsNumber)

  const arrayOfPiles = getArrayOfSummingNumbers(currentNumber, DIVIDER)
  const currentPile = R.last(arrayOfPiles)
  const isDivisible = R.modulo(currentNumber, DIVIDER) === 0

  const startRunning = () => setTossRunning(true)
  const endRunning = () => {
    setTossRunning(false)
    setUpdateCurrentNumber(true)
  }

  useEffect(() => {
    if (updateCurrentNumber) {
      setCurrentNumber(cardsNumber)
      setUpdateCurrentNumber(false)
    }
  }, [updateCurrentNumber, cardsNumber])

  useEffect(() => {
    if (cardsNumber > 0 && currentNumber !== cardsNumber) {
      setTimeout(startRunning, 200)
    }
  }, [cardsNumber, currentNumber])

  useEffect(() => {
    if (isDivisible && currentNumber > 0) {
      setLeafblowerRunning(true)
    }
  }, [currentNumber])

  const handleEndLeafblower = () => setLeafblowerRunning(false)

  const renderIconPiles = () => {
    const fullPiles = R.filter(R.equals(DIVIDER))(arrayOfPiles)

    return fullPiles.map((_, index) => (
      <PileIcon
        key={`full-pile-${index}`}
        src='assets/saltyFlashcardPileAnimation/icons/PileIcon.svg'
      />
    ))
  }

  return (
    <Container>
      {!leafblowerRunning && (
        <Lottie
          isStopped={!tossRunning}
          isClickToPauseDisabled
          eventListeners={[
            {
              eventName: 'complete',
              callback: endRunning
            }
          ]}
          options={{
            loop: false,
            autoplay: false,
            animationData: tossJSON,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice'
            }
          }}
        />
      )}
      {leafblowerRunning && (
        <Lottie
          isStopped={!leafblowerRunning}
          isClickToPauseDisabled
          eventListeners={[
            {
              eventName: 'complete',
              callback: handleEndLeafblower
            }
          ]}
          options={{
            loop: false,
            autoplay: true,
            animationData: leafblowerJSON,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice'
            }
          }}
        />
      )}
      {currentNumber > 0 && !isDivisible && (
        <PileImage src={getPileImageByCardsNumber(currentPile)} />
      )}
      <PileIconsContainerOuter>
        <PileIconsContainer>{renderIconPiles()}</PileIconsContainer>
      </PileIconsContainerOuter>
    </Container>
  )
}

export default SaltyFlashcardPileAnimation

const MAX_WIDTH = 180

const Container = styled.div`
  position: relative;
  max-width: ${MAX_WIDTH}px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const PileImage = styled.img`
  position: absolute;
`

const PileIcon = styled.img`
  width: calc((${MAX_WIDTH}px - 18px) / 10);
`

const PileIconsContainerOuter = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
`

const PileIconsContainer = styled.div`
  display: inline-flex;
  flex-wrap: wrap-reverse;
  //align-items: flex-end;
  //justify-content: flex-start;
  gap: 2px;
`
