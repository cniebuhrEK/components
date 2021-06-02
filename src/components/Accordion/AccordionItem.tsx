import React from 'react'
import styled from 'styled-components'
import AccordionContext from './context'

const AccordionItemContainer = styled.div`
  position: relative;
  padding: ${({ pad }) => ` 4px 4px 4px ${pad}px`};

  &:hover {
    background-color: ${({ light }) =>
      light ? 'rgba(0, 0, 0, 0.25)' : 'rgba(255, 255, 255, 0.05)'};
  }

  &:hover::after {
    content: '';
    position: absolute;
    width: 2px;
    height: 100%;
    top: 0px;
    left: 8px;
    background-color: ${({ theme }) => theme.palette.orange05};
  }
`

const AccordionItem = ({ children, light }) => {
  const { level } = React.useContext(AccordionContext)

  return (
    <AccordionItemContainer pad={level * 18} light={light}>
      {children}
    </AccordionItemContainer>
  )
}

export default AccordionItem
