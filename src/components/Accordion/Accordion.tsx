// Accordion/Accordion.tsx - Accordion container component

import React from 'react'
import styled from 'styled-components'
import classnames from 'classnames'
import AccordionContext from './context'

import ArrowDown from '../../icons/ArrowDown'
import ArrowRight from '../../icons/ArrowRight'

interface AccordionProps {
  // React child elements
  children?: JSX.Element[] | JSX.Element | string

  // Use light theme?
  light: boolean

  // The section is open?
  active: boolean

  // Show an arrow
  arrow: boolean

  // Component for the accordion button
  button: JSX.Element | string

  // Is the accordion part of a navbar?
  link: boolean
}

// Collapsable and expandable accordion
const Accordion = (props: AccordionProps): JSX.Element => {
  const { children, light, active, arrow, button: component, link } = props

  // Get the current level of nesting from context
  const { level } = React.useContext(AccordionContext)

  // Decide whether the accordion is open or not
  const [open, setOpen] = React.useState<boolean>(active)

  // Ref for accordion children
  const ref = React.useRef<HTMLDivElement>(null)

  // Active class for accordion toggled.
  // This is used to keep nested accordions open when only the child expander is open
  // and no accordion item is selected.
  const cx = classnames({ '--isActive': active })

  // If any accordion child is open, set the accordion to open
  React.useEffect(() => {
    if (ref.current) {
      const tmp = ref.current.querySelector('.--isActive')

      if (tmp || active) {
        setOpen(true)
      }
    }
  }, [children])

  function onClick(e: any): void {
    e.preventDefault()
    setOpen(!open)
  }

  return (
    <AccordionContext.Provider value={{ level: level + 1 }}>
      <AccordionContainer className={cx} light={light}>
        <AccordionButton
          pad={level === 1 ? 20 : 18 * level}
          light={light}
          onClick={link ? null : onClick}
        >
          {arrow ? (
            open ? (
              <ArrowDown onClick={onClick} />
            ) : (
              <ArrowRight onClick={onClick} />
            )
          ) : undefined}
          {component}
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
  arrow: false,
  link: false
}

const AccordionContainer = styled.div`
  color: ${({ light, theme }) =>
    light ? theme.palette.black : theme.palette.white};
`

const AccordionButton = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${({ pad }) => `4px 4px 4px ${pad}px`};
  user-select: none;

  p {
    font-size: ${({ theme }) => theme.typography.fontSizeSmall};
  }

  svg {
    color: ${({ theme }) => theme.palette.orange01};
    font-size: 20px;
  }

  &:hover {
    background-color: ${({ light }) =>
      light ? 'rgba(0, 0, 0, 0.25)' : 'rgba(255, 255, 255, 0.05)'};
    cursor: pointer;
  }

  &:hover::after {
    content: '';
    position: absolute;
    width: 3px;
    height: 100%;
    top: 0px;
    left: 8px;
    background-color: ${({ theme }) => theme.palette.orange01};
  }
`

const AccordionChildren = styled.div`
  position: ${({ active }) => (active ? 'relative' : 'absolute')};
  left: ${({ active }) => (active ? '0' : '-99999px')};
`

export default Accordion
