import React from 'react'

import { ToolsBarContainer, ButtonsContainer } from './styles'

import HighlightButton from './HighlightButton'
import StrikethroughButton from './StrikethroughButton'
import FlagForReviewButton from './FlagForReviewButton'

interface HeaderProps {
  highlightButton: boolean
  strikethroughButton: boolean
  flagForReviewButton: boolean
  onFlagClick: (e) => void
  isFlagged: boolean
}

const Header = (props: HeaderProps): JSX.Element => {
  const {
    highlightButton,
    strikethroughButton,
    flagForReviewButton,
    onFlagClick,
    isFlagged
  } = props

  return (
    <ToolsBarContainer>
      <ButtonsContainer>
        {highlightButton && <HighlightButton />}
        {strikethroughButton && <StrikethroughButton />}
      </ButtonsContainer>
      <ButtonsContainer>
        {flagForReviewButton && (
          <FlagForReviewButton
            onFlagClick={onFlagClick}
            isFlagged={isFlagged}
          />
        )}
      </ButtonsContainer>
    </ToolsBarContainer>
  )
}

Header.defaultProps = {}

export default Header
