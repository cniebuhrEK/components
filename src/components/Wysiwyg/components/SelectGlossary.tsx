import React from 'react'
import * as R from 'ramda'
import styled from 'styled-components'
import ReactModal from 'react-modal'
import debounce from 'lodash.debounce'
import ReactTooltip from 'react-tooltip'

import { GLOSSARY_BLOT_NAME } from '../customBlots'
import { Button } from '../../Button'
import { Input } from '../../Input'
import { Textarea } from '../../Textarea'
import { AddIcon, CheckmarkIcon } from '../../../icons'
import { Pagination } from '../../Pagination'
import { Toast } from '../../Toast'

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
  selectedText: any
  initialDelta: any
  glossaryEntries?: GlossaryPhrase[]
  handleFetchGlossaryList?: (e: any) => void
  handleCreateNew?: (e: any) => Promise<void>
  handleClose: () => void
}

export const SelectGlossary = (props: SelectGlossaryProps): JSX.Element => {
  const {
    pagination,
    glossaryEntries,
    handleFetchGlossaryList,
    editorInstance,
    handleClose,
    open,
    selectedText,
    initialDelta,
    handleCreateNew
  } = props
  const [selectedId, setSelectedId] = React.useState(null)
  const [page, setPage] = React.useState(1)
  const [searchQuery, setSearchQuery] = React.useState('')
  const [phraseWord, setPhraseWord] = React.useState('')
  const [phraseExplanation, setPhraseExplanation] = React.useState('')
  const [isCreateNewOpen, setIsCreateNewOpen] = React.useState(false)
  const [isCreateNewLoading, setIsCreateNewLoading] = React.useState(false)
  const [showToastMessage, setShowToastMessage] = React.useState(false)
  const [toastMessage, setToastMessage] = React.useState('')

  const handleOpenCreateNew = () => setIsCreateNewOpen(true)
  const handleCloseCreateNew = () => setIsCreateNewOpen(false)

  const handleChangeWord = e => {
    e.preventDefault()
    setPhraseWord(e.target.value)
  }
  const handleChangeExplanation = e => {
    e.preventDefault()
    setPhraseExplanation(e.target.value)
  }

  React.useEffect(() => {
    if (selectedText) {
      setSearchQuery(selectedText)
    }
  }, [selectedText])

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
    setPhraseExplanation('')
    setPhraseWord('')
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

  const handleSearch = e => {
    e.stopPropagation()
    setSearchQuery(R.pathOr('', ['target', 'value'], e))
  }

  const debounceHandler = React.useCallback(debounce(handleSearch, 500), [
    searchQuery
  ])

  const SelectExistingGlossary = (
    <React.Fragment>
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
        {handleCreateNew && (
          <CreateNewTrigger onClick={handleOpenCreateNew}>
            Create new?
          </CreateNewTrigger>
        )}
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
          isLoading={isCreateNewLoading}
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
    </React.Fragment>
  )

  const openToastMessage = () => setShowToastMessage(true)
  const hideToastMessage = () => setShowToastMessage(false)

  const handleSubmitCreateNew = async () => {
    setIsCreateNewLoading(true)

    const handleSuccess = response => {
      setIsCreateNewLoading(false)
      const responseId = R.pathOr('', ['data', 'id'], response)
      editorInstance.format(GLOSSARY_BLOT_NAME, responseId)
      ReactTooltip.rebuild()
      setSelectedId(null)
      handleCloseCreateNew()
      setPhraseExplanation('')
      setPhraseWord('')
      handleClose()
    }

    const handleError = e => {
      setIsCreateNewLoading(false)
      R.pipe(
        R.pathOr('Something went wrong', [
          'response',
          'data',
          'error',
          'message'
        ]),
        setToastMessage
      )(e)
      openToastMessage()
    }

    if (handleCreateNew) {
      try {
        const response = await handleCreateNew({
          phrase: phraseWord,
          explanation: phraseExplanation
        })
        handleSuccess(response)
      } catch (e) {
        handleError(e)
      }
    }
  }

  const CreateNew = (
    <CreateNewContainer>
      <CreateNewTitle>Create new glossary record</CreateNewTitle>
      <Input label='Word' value={phraseWord} onChange={handleChangeWord} />
      <Textarea
        label='Explanation'
        value={phraseExplanation}
        onChange={handleChangeExplanation}
      />
      <CreateNewButtonsContainer>
        <Button
          type='button'
          id='select-glossary-cancel'
          color='blue'
          size='small'
          variant='outlined'
          onClick={handleCloseCreateNew}
        >
          Cancel
        </Button>
        <Button
          id='select-glossary-submit'
          type='button'
          color='blue'
          size='small'
          onClick={handleSubmitCreateNew}
          disabled={R.or(
            R.isEmpty(phraseExplanation.trim()),
            R.isEmpty(phraseWord.trim())
          )}
        >
          Save
        </Button>
      </CreateNewButtonsContainer>
    </CreateNewContainer>
  )

  return (
    <StyledModal isOpen={open} onRequestClose={handleClose}>
      {isCreateNewOpen ? CreateNew : SelectExistingGlossary}
      <Toast
        severity='error'
        handleClose={hideToastMessage}
        open={showToastMessage}
      >
        {toastMessage}
      </Toast>
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

const CreateNewButtonsContainer = styled.div`
  margin-top: 29px;
  display: flex;
  justify-content: center;

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
    padding-right: 20px;
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
    width: 40%;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    paddin-right: 10px;
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
    max-width: 473px;
    min-width: 473px;
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

const CreateNewTrigger = styled.div`
  font-size: 12px;
  letter-spacing: -0.1px;
  text-decoration-line: underline;
  color: ${({ theme }) => theme.palette.textDark};
  min-width: 70px;
  white-space: nowrap;
  margin-right: 25px;
  line-height: 32px;
  cursor: pointer;
`

const CreateNewTitle = styled.div`
  color: ${({ theme }) => theme.palette.brown01};
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 24px;
`

const CreateNewContainer = styled.div`
  max-width: 327px;
  margin: 0 auto;
`
