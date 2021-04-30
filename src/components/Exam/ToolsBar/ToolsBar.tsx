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
  afterHtmlChangeCallback: () => void
  isFlagged: boolean
}

const Header = (props: HeaderProps): JSX.Element => {
  const {
    highlightButton,
    strikethroughButton,
    flagForReviewButton,
    onFlagClick,
    isFlagged,
    afterHtmlChangeCallback
  } = props

  return (
    <ToolsBarContainer>
      <ButtonsContainer>
        {highlightButton && (
          <HighlightButton callback={afterHtmlChangeCallback} />
        )}
        {strikethroughButton && (
          <StrikethroughButton callback={afterHtmlChangeCallback} />
        )}
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

Header.defaultProps = {
  afterHtmlChangeCallback: () => {}
}

export default Header
