import React from 'react'
import * as R from 'ramda'
import styled from 'styled-components'
import ReactModal from 'react-modal'
import debounce from 'lodash.debounce'
import ReactTooltip from 'react-tooltip'

import { GLOSSARY_BLOT_NAME } from '../customBlots'
import { Button } from '../../Button'
import { Input } from '../../Input'
import { AddIcon, CheckmarkIcon } from '../../../icons'
import { Pagination } from '../../Pagination'

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
  const [page, setPage] = React.useState(1)
  const [searchQuery, setSearchQuery] = React.useState('')
  const [initialDelta, setInitialDelta] = React.useState(null)

  React.useEffect(() => {
    const selection = editorInstance.getSelection(true)
    const index = R.propOr(0, 'index', selection)
    const length = R.propOr(1, 'length', selection)
    const selectedText = editorInstance.getText(index, length)
    const initialContent = editorInstance.getContents()

    console.log({
      selectedText,
      selection
    })

    if (open && editorInstance) {
      setSearchQuery(selectedText)
      setInitialDelta(initialContent)
    }
  }, [open, editorInstance])

  React.useEffect(() => {
    handleFetchGlossaryList &&
      handleFetchGlossaryList({
        limit: {
          page: page,
          take: 8
        },
        order: {
          by: 'phrase',
          dir: 'desc'
        },
        filter: {
          search: searchQuery
        }
      })
  }, [page, searchQuery])

  const handleSubmit = e => {
    e.preventDefault()
    setSelectedId(null)
    handleClose()
  }

  const handleCancel = e => {
    e.preventDefault()
    editorInstance.setContents(initialDelta)
    ReactTooltip.rebuild()
    setSelectedId(null)
    handleClose()
  }

  const handleSelect = id => () => {
    setSelectedId(id)
    editorInstance.format(GLOSSARY_BLOT_NAME, id)
    ReactTooltip.rebuild()
  }
  const handlePageChange = page => setPage(page)

  const actionButton = id =>
    id !== selectedId ? (
      <Button
        type='button'
        size='small'
        startIcon={<AddIcon />}
        onClick={handleSelect(id)}
      >
        Add
      </Button>
    ) : (
      <Button
        type='button'
        size='small'
        startIcon={<CheckmarkIcon />}
        color='blue'
      >
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

  const handleSearch = e => setSearchQuery(R.pathOr('', ['target', 'value'], e))

  const debounceHandler = React.useCallback(debounce(handleSearch, 500), [
    searchQuery
  ])

  return (
    <StyledModal isOpen={open} onRequestClose={handleClose}>
      <SearchContainer>
        <Input
          type='search'
          size='small'
          placeholder=''
          value={searchQuery}
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
          type='button'
          id='select-glossary-cancel'
          color='blue'
          size='small'
          variant='outlined'
          onClick={handleCancel}
        >
          Cancel
        </Button>
        <Button
          id='select-glossary-submit'
          type='button'
          color='blue'
          size='small'
          onClick={handleSubmit}
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
      width: 90%;
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
