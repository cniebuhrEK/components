import React from 'react'
import Component from './SaltyFlashcardPileAnimation'
import styled from 'styled-components'

const Template = args => {
  const [currentNumber, setCurrentNumber] = React.useState(args.cardsNumber)

  const handleTrigger = () => setCurrentNumber(prev => prev + 1)

  return (
    <div>
      <Component cardsNumber={currentNumber} />
      <br />
      <CardsNumber>{currentNumber}</CardsNumber>
      <button onClick={handleTrigger}>Trigger</button>
    </div>
  )
}

export const SaltyFlashcardPileAnimation = Template.bind({})
SaltyFlashcardPileAnimation.args = {
  cardsNumber: 0
}

export default {
  title: 'Atoms/SaltyFlashcardPileAnimation',
  component: SaltyFlashcardPileAnimation
}

const CardsNumber = styled.div`
  font-weight: bold;
  font-size: 18px;
`
