export const getIconImageByCardsNumber = cardsNumber => {
  switch (true) {
    case cardsNumber < 2000 && cardsNumber >= 1000:
      return 'assets/saltyFlashcardPileAnimation/icons/icon-1000.svg'
    case cardsNumber < 3000 && cardsNumber >= 2000:
      return 'assets/saltyFlashcardPileAnimation/icons/icon-2000.svg'
    case cardsNumber < 4000 && cardsNumber >= 3000:
      return 'assets/saltyFlashcardPileAnimation/icons/icon-3000.svg'
    case cardsNumber < 5000 && cardsNumber >= 4000:
      return 'assets/saltyFlashcardPileAnimation/icons/icon-4000.svg'
    case cardsNumber < 6000 && cardsNumber >= 5000:
      return 'assets/saltyFlashcardPileAnimation/icons/icon-5000.svg'
    case cardsNumber < 7000 && cardsNumber >= 6000:
      return 'assets/saltyFlashcardPileAnimation/icons/icon-6000.svg'
    case cardsNumber < 8000 && cardsNumber >= 7000:
      return 'assets/saltyFlashcardPileAnimation/icons/icon-7000.svg'
    case cardsNumber < 9000 && cardsNumber >= 8000:
      return 'assets/saltyFlashcardPileAnimation/icons/icon-8000.svg'
    case cardsNumber < 10000 && cardsNumber >= 9000:
      return 'assets/saltyFlashcardPileAnimation/icons/icon-9000.svg'
    case cardsNumber >= 10000:
      return 'assets/saltyFlashcardPileAnimation/icons/icon-10000.svg'
    default:
      return 'assets/saltyFlashcardPileAnimation/piles/pile-1.svg'
  }
}
