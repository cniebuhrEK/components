import React from 'react'
import ReactTooltip from 'react-tooltip'
import * as R from 'ramda'
import styled from 'styled-components'

export interface GlossaryTooltipsProps {
  getPhraseDetails?: (e: any) => void
  glossaryIds?: string[]
  bookContentId?: string
}

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
  bookContentId
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

    const isCurrent = bookContentId === id
    const handleClick = e => {
      e.stopPropagation()

      if (!isCurrent) {
        window.location.href = `/books/${bookId}/chapter/${chapterOrder}/part/${partOrder}?selectedBookContentId=${id}`
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
  const { getPhraseDetails, glossaryIds, bookContentId } = props

  const renderTooltips = R.addIndex(R.map)((id, index) => (
    <PhraseTooltip
      id={id}
      key={`phrase-tooltip-${id}-${index}`}
      getPhraseDetails={getPhraseDetails}
      bookContentId={bookContentId}
    />
  ))(glossaryIds)

  return <TooltipsContainer>{renderTooltips}</TooltipsContainer>
}

export default GlossaryTooltips

const TooltipsContainer = styled.div`
  .__react_component_tooltip {
    background-color: ${({ theme }) => theme.palette.biege} !important;
    opacity: 1 !important;
    color: ${({ theme }) => theme.palette.textDark} !important;
    border: 1px solid ${({ theme }) => theme.palette.darkblue03} !important;
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
    color: ${({ theme }) => theme.palette.textDark} !important;
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
    isCurrent ? theme.palette.inactive : theme.palette.textDark};
  margin-right: 3px;
  cursor: pointer;

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
