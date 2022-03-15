import React from 'react'
import ReactTooltip from 'react-tooltip'
import * as R from 'ramda'
import styled from 'styled-components'
import { getGlossaryIds } from '../utils'

export interface GlossaryTooltipsProps {
  deltaObject?: any
  getPhraseDetails?: (e: any) => void
  redirectHandler?: (e: any) => void
  glossaryIds?: string[]
  bookContentId?: string
}

const getParam = (param, path) =>
  R.pipe(
    R.split(param),
    R.drop(1),
    R.head,
    R.split('/'),
    R.drop(1),
    R.head
  )(path)

const getTagOrBookShortcut = details =>
  R.pipe(
    R.propOr(null, 'book_tag'),
    R.ifElse(
      R.isNil,
      () => R.pipe(R.propOr('', 'book_title'), R.take(3))(details),
      R.identity
    )
  )(details)

const PhraseTooltip = ({
  id,
  getPhraseDetails,
  redirectHandler
}): JSX.Element => {
  const [data, setData] = React.useState({
    id,
    phrase: '',
    explanation: '',
    occurances: []
  })

  const handleFetchData = () => {
    const handleSuccess = response => {
      const tooltipData = R.propOr(
        {
          id,
          phrase: '',
          explanation: ''
        },
        'data',
        response
      )
      setData(tooltipData)
    }
    const handleError = e => {
      console.error(e)
      setData({
        id,
        phrase: '',
        explanation: '',
        occurances: []
      })
    }

    getPhraseDetails({ id }).then(handleSuccess).catch(handleError)
  }
  const occurances = R.pipe(
    R.propOr([], 'occurances'),
    R.uniqBy(R.prop('id'))
  )(data)
  const renderOccurances = occurances.map((occurance, index) => {
    const id = R.propOr('', 'id', occurance)
    const bookId = R.propOr('', 'book_id', occurance)
    const chapterOrder = R.propOr('', 'chapter_order', occurance)
    const partOrder = R.propOr('', 'part', occurance)
    const subchapterOrder = R.propOr('', 'subchapter_order', occurance)

    const pathname = window.location.pathname

    const pathnameBookId = getParam('book', pathname)
    const pathnameChapterOrder = getParam('chapter', pathname)
    const pathnamePartOrder = getParam('part', pathname)

    const isCurrent =
      pathnameBookId === bookId.toString() &&
      pathnameChapterOrder === chapterOrder.toString() &&
      pathnamePartOrder === partOrder.toString()

    const redirectPath = `/books/${bookId}/chapter/${chapterOrder}/part/${partOrder}`

    const handleRedirect = () => {
      if (redirectHandler) {
        redirectHandler(redirectPath)
      } else {
        window.location.href = redirectPath
      }
    }

    const handleClick = e => {
      e.stopPropagation()

      if (!isCurrent) {
        handleRedirect()
      }
    }

    return (
      <OccuranceElement
        onClick={handleClick}
        isCurrent={isCurrent}
        key={`${index}-${id}`}
      >
        <strong>{getTagOrBookShortcut(occurance)}:</strong> {chapterOrder}.{' '}
        {subchapterOrder}
      </OccuranceElement>
    )
  })

  return (
    <ReactTooltip
      id={id}
      place='top'
      effect='solid'
      data-class='tooltip-content'
      clickable
      afterShow={handleFetchData}
    >
      <div className='content'>
        <span className='phrase'>{data.phrase};</span> {data.explanation}
      </div>
      <div className='occurances'>{renderOccurances}</div>
    </ReactTooltip>
  )
}

export const GlossaryTooltips = (props: GlossaryTooltipsProps): JSX.Element => {
  const { getPhraseDetails, deltaObject, redirectHandler } = props

  const glossaryIds = getGlossaryIds(deltaObject)

  const renderTooltips = R.addIndex(R.map)((id, index) => (
    <PhraseTooltip
      id={id}
      key={`phrase-tooltip-${id}-${index}`}
      getPhraseDetails={getPhraseDetails}
      redirectHandler={redirectHandler}
    />
  ))(glossaryIds)

  return <TooltipsContainer>{renderTooltips}</TooltipsContainer>
}

export default GlossaryTooltips

const TooltipsContainer = styled.div`
  .__react_component_tooltip {
    background-color: ${({ theme }) =>
      theme.colors.backgrounds.main} !important;
    opacity: 1 !important;
    color: ${({ theme }) => theme.colors.main.text} !important;
    border: 1px solid ${({ theme }) => theme.colors.main.text} !important;
    border-radius: ${({ theme }) => theme.shape.borderRadiusBig} !important;
    padding: 10px !important;
    margin-top: 0px !important;
    box-shadow: ${({ theme }) => theme.shadows.darkShadow} !important;
    max-width: 189px !important;
    text-align: left !important;
    font-size: 11px !important;
    line-height: 19px !important;
    letter-spacing: -0.1px !important;
    z-index: ${({ theme }) => theme.zIndex.snackbar} !important;

    &::before,
    &::after {
      display: none;
    }
  }

  .content {
    color: ${({ theme }) => theme.colors.main.text} !important;
  }

  .phrase {
    font-weight: bold;
  }

  .occurances {
    display: flex;
    flex-wrap: wrap;
  }
`

const OccuranceElement = styled.a`
  color: ${({ theme, isCurrent }) =>
    isCurrent ? theme.colors.main.grey600 : theme.colors.main.text} !important;
  margin-right: 3px;
  cursor: pointer !important;

  strong,
  &:active,
  &:focus,
  &:hover,
  &:visited {
    color: ${({ theme, isCurrent }) =>
      isCurrent
        ? theme.colors.main.grey600
        : theme.colors.main.text} !important;
  }

  .content {
    white-space: nowrap;
    cursor: pointer;
  }

  strong {
    font-weight: bold;
  }

  &:not(:last-child)::after {
    content: ';';
  }
`
