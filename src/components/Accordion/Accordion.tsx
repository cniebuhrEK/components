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

  // What level of nesting are we at?
  level: number
}

// Collapsable and expandable accordion
const Accordion = (props: AccordionProps): JSX.Element => {
  const { children, text, light, active, level } = props
  const [open, setOpen] = React.useState<boolean>(active)
  const ref = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (ref.current) {
      const tmp = ref.current.querySelector('.--isActive')

      if (tmp) {
        setOpen(true)
      }
    }
  }, [children])

  function onClick(e: any): void {
    e.preventDefault()
    setOpen(!open)
  }

  return (
    <AccordionContext.Provider value={{ level }}>
      <AccordionContainer light={light}>
        <AccordionButton pad={20 * level} onClick={onClick}>
          {open ? <ArrowDown /> : <ArrowRight />}
          <p>{text}</p>
        </AccordionButton>
        <AccordionChildren ref={ref} active={open}>
          {children}
        </AccordionChildren>
      </AccordionContainer>
    </AccordionContext.Provider>
  )
}

Accordion.defaultProps = {
  text: 'Accordion',
  light: false,
  active: false,
  level: 0
}

const AccordionContainer = styled.div`
  color: ${({ light, theme }) =>
    light ? theme.palette.black : theme.palette.white};
`

const AccordionButton = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${({ pad }) => `4px 4px 4px ${pad}px`};

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
  visibility: ${({ active }) => (active ? 'visible' : 'hidden')};
`

export default Accordion
