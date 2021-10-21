import React from 'react'
import ReactTooltip from 'react-tooltip'
import * as R from 'ramda'
import styled from 'styled-components'

export interface GlossaryTooltipsProps {
  getPhraseDetails?: (e: any) => void
  glossaryIds?: string[]
}

const PhraseTooltip = ({ id, getPhraseDetails }): JSX.Element => {
  const [data, setData] = React.useState({
    id,
    phrase: '',
    explanation: ''
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
        explanation: ''
      })
    }

    getPhraseDetails({ id }).then(handleSuccess).catch(handleError)
  }

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
    </ReactTooltip>
  )
}

export const GlossaryTooltips = (props: GlossaryTooltipsProps): JSX.Element => {
  const { getPhraseDetails, glossaryIds } = props

  const renderTooltips = R.addIndex(R.map)((id, index) => (
    <PhraseTooltip
      id={id}
      key={`phrase-tooltip-${id}-${index}`}
      getPhraseDetails={getPhraseDetails}
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
    z-index: ${({ theme }) => theme.zIndex.modal} !important;

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
`
