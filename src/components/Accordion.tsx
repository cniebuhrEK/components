import React from 'react'
import styled from 'styled-components'

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
        {open ? (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            height='24px'
            viewBox='0 0 24 24'
            width='20px'
            fill='#FF9E33'
          >
            <path d='M0 0h24v24H0V0z' fill='none' />
            <path d='M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z' />
          </svg>
        ) : (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            height='24px'
            viewBox='0 0 24 24'
            width='20px'
            fill='#FF9E33'
          >
            <path d='M0 0h24v24H0V0z' fill='none' />
            <path d='M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z' />
          </svg>
        )}
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
    font-size: 1.2rem;
    user-select: none;
  }

  &:hover {
    cursor: pointer;
  }
`

const AccordionChildren = styled.div`
  padding: 0px 0px 0px 24px;
`

export default Accordion
