import React from 'react'
import * as R from 'ramda'
import styled from 'styled-components'
import ReactModal from 'react-modal'
import debounce from 'lodash.debounce'

import { GLOSSARY_BLOT_NAME } from '../customBlots'
import { Button } from '../../Button'
import { Input } from '../../Input'
import { AddIcon, CheckmarkIcon } from '../../../icons'
import { Pagination } from '../../Pagination'
import usePrevious from '../../../hooks/usePrevious'

export interface GlossaryPhrase {
  id: string
  phrase: string
  explanation: string
}

export interface PaginationProps {
  page: number
  take: number
  recordsTotal: number
  pagesTotal: number
}

interface SelectGlossaryProps {
  pagination?: PaginationProps
  open: boolean
  editorInstance: any
  glossaryEntries?: GlossaryPhrase[]
  handleFetchGlossaryList?: (e: any) => void
  handleClose: () => void
}

export const SelectGlossary = (props: SelectGlossaryProps): JSX.Element => {
  const {
    pagination,
    glossaryEntries,
    handleFetchGlossaryList,
    editorInstance,
    handleClose,
    open
  } = props
  const [selectedId, setSelectedId] = React.useState(null)
  const [query, setQuery] = React.useState({
    limit: {
      page: 1,
      take: 8
    },
    order: {
      by: 'phrase',
      dir: 'desc'
    },
    filter: {
      search: ''
    }
  })

  const prevQuery = usePrevious(query)

  React.useEffect(() => {
    if (R.not(R.equals(query, prevQuery))) {
      console.log('query update', { query, prevQuery })
      handleFetchGlossaryList && handleFetchGlossaryList(query)
    }
  }, [query])

  React.useEffect(() => {
    const paginationPage = R.propOr(1, 'page', pagination)
    const currentPage = R.pathOr(1, ['limit', 'page'], query)

    if (currentPage !== paginationPage) {
      console.log('handle pagination Page')

      setQuery(prevState => ({
        ...prevState,
        limit: {
          page: R.propOr(1, 'page', pagination),
          take: 8
        }
      }))
    }
  }, [pagination, query])

  const handleGlossary = e => {
    e.preventDefault()
    // @ts-ignore
    editorInstance.format(GLOSSARY_BLOT_NAME, selectedId)
    handleClose()
  }

  const handleSelect = id => () => {
    console.log('handle select')
    setSelectedId(id)
  }
  const handlePageChange = page => {
    console.log('handle Page Change')

    setQuery(prevState => ({
      ...prevState,
      limit: {
        page,
        take: prevState.limit.take
      }
    }))
  }

  const actionButton = id =>
    id !== selectedId ? (
      <Button size='small' startIcon={<AddIcon />} onClick={handleSelect(id)}>
        Add
      </Button>
    ) : (
      <Button size='small' startIcon={<CheckmarkIcon />} color='blue'>
        Added
      </Button>
    )

  const renderGlossaryPhrases = R.map(glossaryEntry => (
    <GlossaryContainer key={`glossary-item-${glossaryEntry.id}`}>
      <div className='left'>{glossaryEntry.phrase}</div>
      <div className='middle'>{glossaryEntry.explanation}</div>
      <div className='right'>{actionButton(glossaryEntry.id)}</div>
    </GlossaryContainer>
  ))(glossaryEntries)

  const handleSearch = e => {
    console.log('handle search')

    setQuery(prevState => ({
      ...prevState,
      limit: {
        page: 1,
        take: 8
      },
      filter: { search: R.pathOr('', ['target', 'value'], e) }
    }))
  }

  const debounceHandler = React.useCallback(debounce(handleSearch, 500), [
    query
  ])

  return (
    <StyledModal isOpen={open} onRequestClose={handleClose}>
      <SearchContainer>
        <Input
          type='search'
          size='small'
          placeholder=''
          onChange={debounceHandler}
        />
      </SearchContainer>
      <GlossaryHeadingContainer>
        <div className='left'>Word</div>
        <div className='middle'>Explanation:</div>
        <div className='right'>Action</div>
      </GlossaryHeadingContainer>
      <div className='list'>{renderGlossaryPhrases}</div>
      <ButtonsContainer>
        <Button
          id='select-glossary-cancel'
          color='blue'
          size='small'
          variant='outlined'
          onClick={handleClose}
        >
          Cancel
        </Button>
        <Button
          id='select-glossary-submit'
          type='submit'
          color='blue'
          size='small'
          onClick={handleGlossary}
        >
          Save
        </Button>
      </ButtonsContainer>
      <PaginationContainer>
        <Pagination
          currentPage={R.propOr(1, 'page', pagination)}
          totalPages={R.propOr(1, 'pagesTotal', pagination)}
          onPageChange={handlePageChange}
        />
      </PaginationContainer>
    </StyledModal>
  )
}

export default SelectGlossary

const SearchContainer = styled.div`
  display: inline-block;
  margin-bottom: 25px;
  max-width: 200px;

  & > div {
    margin: 0;
  }
`

const ButtonsContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;

  button {
    min-width: 157px;
  }

  button + button {
    margin-left: 24px;
  }
`

const PaginationContainer = styled.div`
  color: ${({ theme }) => theme.palette.textDark};
  margin-top: 7px;

  * {
    color: ${({ theme }) => theme.palette.textDark};
  }
`

const GlossaryHeadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.palette.brown01};
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: -0.1px;
  border-bottom: 1px solid ${({ theme }) => theme.palette.grey09};
  padding-bottom: 4.5px;
  text-align: center;

  .left {
    width: 30%;
  }
  .middle {
    width: 40%;
  }
  .right {
    width: 30%;
  }
`

const GlossaryContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${({ theme }) => theme.palette.grey09};
  padding: 16px;

  .left {
    color: ${({ theme }) => theme.palette.brown01};
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: -0.1px;
    width: 30%;
  }
  .middle {
    color: ${({ theme }) => theme.palette.textDark};
    font-weight: normal;
    font-size: 11px;
    line-height: 19px;
    text-align: center;
    letter-spacing: -0.1px;
    text-align: center;
    width: 40%;
  }
  .right {
    text-align: center;
    width: 30%;

    button {
      width: 80%;
    }
  }
`

export function ReactModalAdapter({
  className,
  portalClassName,
  modalClassName,
  overlayClassName,
  ...props
}) {
  return (
    <ReactModal
      appElement={document.getElementById('root')}
      className={modalClassName}
      portalClassName={className}
      overlayClassName={overlayClassName}
      {...props}
    />
  )
}

export const StyledModal = styled(ReactModalAdapter).attrs({
  overlayClassName: 'Overlay',
  modalClassName: 'Modal',
  portalClassName: 'Portal'
})`
  & .Overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: ${({ theme }) => theme.zIndex.modal};
    width: 100%;
    height: 100%;
    background: transparent;
    overflow-y: auto;
    text-align: center;
    transition: opacity 0.2s
      ${({ theme }) => theme.transitions.easing.easeInOut} 0s;

    &[class*='--after-open'] {
      opacity: 1;
    }

    &[class*='--before-close'] {
      opacity: 0;
    }
  }

  & .Modal {
    z-index: ${({ theme }) => theme.zIndex.modal + 10};
    font-family: ${({ theme }) => theme.typography.fontFamily};
    text-align: left;
    position: relative;
    padding: 20px;
    background: ${({ theme }) => theme.palette.biege};
    box-shadow: ${({ theme }) => theme.shadows.darkShadow};
    color: ${({ theme }) => theme.palette.brown01};
    border-radius: 6px;
    outline: 0;
    max-width: 408px;
    min-width: 408px;
    margin-top: 19px;
    font-size: ${({ theme }) => theme.typography.fontSizeSmall};
    font-weight: 400;
    max-height: calc(100% - 40px);
    display: inline-flex;
    flex-direction: column;
  }

  .list {
    overflow-y: auto;
  }
`
