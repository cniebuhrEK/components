import React from 'react'
import styled from 'styled-components'
import AccordionContext from './context'

import ArrowDown from '../../icons/ArrowDown'
import ArrowRight from '../../icons/ArrowRight'

interface AccordionProps {
  // React child elements
  children?: JSX.Element[] | JSX.Element | string

  // Text of the expander/collapser
  text: string

  // Use light theme?
  light: boolean

  // The section is open?
  active: boolean

  // Show the arrow icon?
  arrow: boolean

  // What level of nesting are we at?
  level: number
}

// Collapsable and expandable accordion
const Accordion = (props: AccordionProps): JSX.Element => {
  const { children, text, light, active, arrow, level } = props
  const [open, setOpen] = React.useState<boolean>(active)
  const ref = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (ref.current && ref.current.getElementsByClassName('active')) {
      setOpen(true)
    }
  }, [])

  function onClick(e: any): void {
    e.preventDefault()
    setOpen(!open)
  }

  return (
    <AccordionContext.Provider value={{ level }}>
      <AccordionContainer light={light}>
        <AccordionButton pad={20 * level} onClick={onClick}>
          {open && arrow ? <ArrowDown /> : <ArrowRight />}
          <p>{text}</p>
        </AccordionButton>
        <AccordionChildren ref={ref}>{open && children}</AccordionChildren>
      </AccordionContainer>
    </AccordionContext.Provider>
  )
}

Accordion.defaultProps = {
  text: 'Accordion',
  light: false,
  active: false,
  arrow: true,
  level: 1
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
  padding-left: ${({ pad }) => `${pad}px`};

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

const AccordionChildren = styled.div``

export default Accordion
