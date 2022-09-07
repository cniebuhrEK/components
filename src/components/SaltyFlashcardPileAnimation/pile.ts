export const getPileImageByCardsNumber = cardsNumber => {
  switch (true) {
    case cardsNumber >= 1000:
      return 'assets/saltyFlashcardPileAnimation/piles/pile-1000.svg'
    case cardsNumber < 1000 && cardsNumber >= 900:
      return 'assets/saltyFlashcardPileAnimation/piles/pile-900.svg'
    case cardsNumber < 900 && cardsNumber >= 800:
      return 'assets/saltyFlashcardPileAnimation/piles/pile-800.svg'
    case cardsNumber < 800 && cardsNumber >= 700:
      return 'assets/saltyFlashcardPileAnimation/piles/pile-700.svg'
    case cardsNumber < 700 && cardsNumber >= 600:
      return 'assets/saltyFlashcardPileAnimation/piles/pile-600.svg'
    case cardsNumber < 600 && cardsNumber >= 500:
      return 'assets/saltyFlashcardPileAnimation/piles/pile-500.svg'
    case cardsNumber < 500 && cardsNumber >= 400:
      return 'assets/saltyFlashcardPileAnimation/piles/pile-400.svg'
    case cardsNumber < 400 && cardsNumber >= 300:
      return 'assets/saltyFlashcardPileAnimation/piles/pile-300.svg'
    case cardsNumber < 300 && cardsNumber >= 200:
      return 'assets/saltyFlashcardPileAnimation/piles/pile-200.svg'
    case cardsNumber < 200 && cardsNumber >= 100:
      return 'assets/saltyFlashcardPileAnimation/piles/pile-100.svg'
    case cardsNumber < 100 && cardsNumber >= 75:
      return 'assets/saltyFlashcardPileAnimation/piles/pile-75.svg'
    case cardsNumber < 75 && cardsNumber >= 50:
      return 'assets/saltyFlashcardPileAnimation/piles/pile-50.svg'
    case cardsNumber < 50 && cardsNumber >= 25:
      return 'assets/saltyFlashcardPileAnimation/piles/pile-25.svg'
    case cardsNumber < 25 && cardsNumber >= 20:
      return 'assets/saltyFlashcardPileAnimation/piles/pile-20.svg'
    case cardsNumber < 20 && cardsNumber >= 15:
      return 'assets/saltyFlashcardPileAnimation/piles/pile-15.svg'
    case cardsNumber < 15 && cardsNumber >= 10:
      return 'assets/saltyFlashcardPileAnimation/piles/pile-10.svg'
    case cardsNumber < 10 && cardsNumber >= 9:
      return 'assets/saltyFlashcardPileAnimation/piles/pile-9.svg'
    case cardsNumber < 9 && cardsNumber >= 8:
      return 'assets/saltyFlashcardPileAnimation/piles/pile-8.svg'
    case cardsNumber < 8 && cardsNumber >= 7:
      return 'assets/saltyFlashcardPileAnimation/piles/pile-7.svg'
    case cardsNumber < 7 && cardsNumber >= 6:
      return 'assets/saltyFlashcardPileAnimation/piles/pile-6.svg'
    case cardsNumber < 6 && cardsNumber >= 5:
      return 'assets/saltyFlashcardPileAnimation/piles/pile-5.svg'
    case cardsNumber < 5 && cardsNumber >= 4:
      return 'assets/saltyFlashcardPileAnimation/piles/pile-4.svg'
    case cardsNumber < 4 && cardsNumber >= 3:
      return 'assets/saltyFlashcardPileAnimation/piles/pile-3.svg'
    case cardsNumber < 3 && cardsNumber >= 2:
      return 'assets/saltyFlashcardPileAnimation/piles/pile-2.svg'
    case cardsNumber < 2 && cardsNumber >= 1:
      return 'assets/saltyFlashcardPileAnimation/piles/pile-1.svg'
    default:
      return 'assets/saltyFlashcardPileAnimation/piles/pile-1.svg'
  }
}
