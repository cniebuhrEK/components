import React from 'react'
import * as R from 'ramda'
import styled from 'styled-components'
import ReactModal from 'react-modal'
import ReactTooltip from 'react-tooltip'

import { GLOSSARY_BLOT_NAME } from '../customBlots'
import { Button } from '../../Button'
import { AddIcon, CheckmarkIcon } from '../../../icons'
import { Pagination } from '../../Pagination'
import {
  getGlossaryIds,
  getRealTextWithAdditionalInsertsAsPlaceholders
} from '../utils'

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

interface ScanGlossaryProps {
  open: boolean
  editorInstance: any
  handleScanGlossaryList?: (e: any) => any
  handleClose: () => void
}

export const ScanGlossary = (props: ScanGlossaryProps): JSX.Element => {
  const { handleScanGlossaryList, editorInstance, handleClose, open } = props
  const [glossaryEntries, setGlossaryEntries] = React.useState([])
  const [page, setPage] = React.useState(1)
  const [pagination, setPagination] = React.useState({
    page: 1,
    take: 5,
    recordsTotal: 0,
    pagesTotal: 0
  })

  const handleScan = () => {
    const raw = editorInstance.getText()
    const skipIds = getGlossaryIds(editorInstance.getContents())
    const query = `?limit[page]=${page}&limit[take]=5`

    const handleSuccess = response => {
      const data = R.pathOr([], ['data', 'data'], response)
      const meta = R.pathOr(
        {
          page: 1,
          take: 5,
          recordsTotal: 0,
          pagesTotal: 0
        },
        ['data', 'meta'],
        response
      )
      setGlossaryEntries(data)
      setPagination(meta)
    }
    const handleError = e => {
      console.error(e)
    }

    // @ts-ignore
    handleScanGlossaryList({
      raw,
      skipIds,
      query
    })
      .then(handleSuccess)
      .catch(handleError)
  }

  React.useEffect(() => {
    if (open) {
      handleScanGlossaryList && handleScan()
    }
  }, [page, open])

  const handleCancel = e => {
    e.preventDefault()
    ReactTooltip.rebuild()
    handleClose()
  }

  const findIndexes = (fullText, str) => {
    const lowerCaseText = fullText.toLowerCase()
    const lowerStr = str.toLowerCase()
    const strLength = str.length

    let startIndex = 0
    let index
    const indexes = []

    while ((index = lowerCaseText.indexOf(lowerStr, startIndex)) > -1) {
      // @ts-ignore
      indexes.push(index)
      startIndex = index + strLength
    }

    return indexes
  }

  const handleSelect = (id, originalPhrase) => () => {
    const phrase = R.toLower(originalPhrase)
    const delta = editorInstance.getContents()
    const totalText = getRealTextWithAdditionalInsertsAsPlaceholders(delta)
    const re = new RegExp(phrase, 'g')
    // make suer the text contains the word I want.
    const match = re.test(totalText)
    if (match) {
      const indices = findIndexes(totalText, phrase)
      const length = phrase.length

      // apply style..
      indices.forEach(index => {
        editorInstance.formatText(index, length, GLOSSARY_BLOT_NAME, id)
      })
    }
    ReactTooltip.rebuild()
  }

  const handlePageChange = page => setPage(page)

  const actionButton = (id, phrase) => {
    const currentIds = getGlossaryIds(editorInstance.getContents())
    const isSelected = R.includes(id, currentIds)

    return !isSelected ? (
      <Button
        type='button'
        size='small'
        startIcon={<AddIcon />}
        onClick={handleSelect(id, phrase)}
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
  }

  const renderGlossaryPhrases = R.map(glossaryEntry => (
    <GlossaryContainer key={`glossary-item-${glossaryEntry.id}`}>
      <div className='left'>{glossaryEntry.phrase}</div>
      <div className='middle'>{glossaryEntry.explanation}</div>
      <div className='right'>
        {actionButton(glossaryEntry.id, glossaryEntry.phrase)}
      </div>
    </GlossaryContainer>
  ))(glossaryEntries)

  return (
    <StyledModal isOpen={open} onRequestClose={handleClose}>
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
          Close
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

export default ScanGlossary

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
    padding-right: 20px;
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
