// Accordion/AccordionItem.tsx - Accordion child component

import React from 'react'
import styled from 'styled-components'
import classnames from 'classnames'
import AccordionContext from './context'

const AccordionItemContainer = styled.div`
  position: relative;
  padding: ${({ pad }) => ` 4px 4px 4px ${pad}px`};

  &:hover,
  &.--isActive {
    background-color: ${({ light }) =>
      light ? 'rgba(0, 0, 0, 0.25)' : 'rgba(255, 255, 255, 0.05)'};
  }

  &:hover::after,
  &.--isActive::after {
    content: '';
    position: absolute;
    width: 3px;
    height: 100%;
    top: 0px;
    left: 8px;
    background-color: ${({ theme }) => theme.palette.orange01};
  }
`

const AccordionItem = ({ children, light, active }) => {
  const { level } = React.useContext(AccordionContext)

  return (
    <AccordionItemContainer
      className={classnames({ '--isActive': active })}
      pad={(level + 1) * 16}
      light={light}
    >
      {children}
    </AccordionItemContainer>
  )
}

AccordionItem.defaultProps = {
  light: false,
  active: false
}

export default AccordionItem
