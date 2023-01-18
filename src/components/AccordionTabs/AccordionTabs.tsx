import React from 'react'
import styled from 'styled-components'
import { propOr, find, propEq } from 'ramda'
import { ArrowDownIcon, TrashIcon } from '../../icons'
import { IconButton } from '../IconButton'

export const AccordionTabs = props => {
  const { tabs, activeTab, tabContents, onChange, onDelete } = props

  const [active, setActive] = React.useState(activeTab)

  const handleSetActive = value => () => {
    setActive(value)
    if (onChange) {
      onChange(value)
    }
  }

  React.useEffect(() => {
    setActive(activeTab)
  }, [activeTab])

  const handleDelete = tab => e => {
    e.stopPropagation()
    onDelete && onDelete(tab)
  }

  const renderTabTriggers = tabs.map(tab => {
    const content = find(propEq('value', propOr('', 'value', tab)))(tabContents)

    return (
      <TabContainer
        key={`tab-container-${propOr('', 'value', tab)}`}
        active={active === propOr('', 'value', tab)}
        data-active={active === propOr('', 'value', tab)}
      >
        <TabTrigger
          name={propOr('', 'value', tab)}
          active={active === propOr('', 'value', tab)}
          data-active={active === propOr('', 'value', tab)}
          onClick={handleSetActive(propOr('', 'value', tab))}
          className='tab-trigger'
        >
          <span>{propOr('', 'label', tab)}</span>
          <TabTriggerActions>
            {onDelete && (
              <IconButton
                onClick={handleDelete(tab)}
                color='primary'
                variant='filled'
                icon={
                  <TrashIcon
                    id={`delete-tab-icon-${propOr('', 'value', tab)}`}
                  />
                }
                id={`delete-tab-${propOr('', 'value', tab)}`}
              />
            )}
            <ArrowContainer
              active={active === propOr('', 'value', tab)}
              data-active={active === propOr('', 'value', tab)}
            >
              <ArrowDownIcon />
            </ArrowContainer>
          </TabTriggerActions>
        </TabTrigger>
        <TabContent
          active={active === propOr('', 'value', tab)}
          data-active={active === propOr('', 'value', tab)}
        >
          {active === propOr('', 'value', tab) &&
            propOr('', 'content', content)}
        </TabContent>
      </TabContainer>
    )
  })

  return <Container>{renderTabTriggers}</Container>
}

export default AccordionTabs

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`
const TabContainer = styled.div`
  flex-grow: ${({ active }) => (active ? '1' : '0')};
  display: flex;
  flex-direction: column;
`

const TabTrigger = styled.div`
  height: 48px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  gap: 16px;
  background: ${({ theme }) => theme.colors.accordionTabs.trigger.background};
  border: 1px solid ${({ theme }) => theme.colors.accordionTabs.trigger.border};
  border-radius: ${({ active }) => (active ? '6px 6px 0px 0px' : '6px')};
`

const TabContent = styled.div`
  opacity: ${({ active }) => (active ? 1 : 0)};
  padding: 16px;
  display: ${({ active }) => (active ? 'block' : 'none')};
  background: ${({ theme }) => theme.colors.accordionTabs.content.background};
  border-width: 0 1px 1px 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.accordionTabs.content.border};
  border-radius: 0 0 6px 6px;
  flex-grow: ${({ active }) => (active ? '1' : '0')};
`

const TabTriggerActions = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`

const ArrowContainer = styled.div`
  transform: ${({ active }) => (active ? 'rotate(180deg)' : 'none')};
  transition: transform 200ms
    ${({ theme }) => theme.transitions.easing.easeInOut};
`
