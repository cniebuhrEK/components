import React from 'react'
import styled from 'styled-components'

import ArrowDown from '../icons/ArrowDown'
import ArrowRight from '../icons/ArrowRight'

interface AccordionProps {
  children?: JSX.Element[] | JSX.Element | string
  text: string
  light: boolean
}

// Collapsable and expandable accordion
const Accordion = (props: AccordionProps): JSX.Element => {
  const { children, text, light } = props
  const [open, setOpen] = React.useState<boolean>(false)

  function onClick(e: any): void {
    e.preventDefault()
    setOpen(!open)
  }

  return (
    <AccordionContainer light={light}>
      <AccordionButton onClick={onClick}>
        {open ? <ArrowDown /> : <ArrowRight />}
        <p>{text}</p>
      </AccordionButton>
      {open && <AccordionChildren>{children}</AccordionChildren>}
    </AccordionContainer>
  )
}

Accordion.defaultProps = {
  text: 'Accordion',
  light: false
}

const AccordionContainer = styled.div`
  color: ${({ light, theme }) =>
    light ? theme.palette.black : theme.palette.white};
`

const AccordionButton = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 4px;

  p {
    font-size: ${({ theme }) => theme.typography.fontSizeNormal};
    user-select: none;
  }

  svg {
    color: ${({ theme }) => theme.palette.orange05};
    font-size: 1.5rem;
  }

  &:hover {
    cursor: pointer;
  }
`

const AccordionChildren = styled.div`
  padding: 0px 0px 0px 24px;
`

export default Accordion
