// Accordion/context.ts - Accordion context definition

import { createContext } from 'react'

// Accordion nesting context
const AccordionContext = createContext({ level: 1 })

export default AccordionContext
