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

  const handleFetchData = async () => {
    const response = await getPhraseDetails({ id })
    const tooltipData = R.propOr(
      {
        id,
        phrase: '',
        explanation: ''
      },
      'data',
      response
    )

    console.log({
      tooltipData,
      data,
      setData
    })

    setData(data)
  }

  return (
    <ReactTooltip
      id={id}
      place='top'
      effect='solid'
      data-class='tooltip-content'
      clickable
      getContent={handleFetchData}
    >
      <div className='content'>
        <span className='phrase'>{data.phrase};</span> {data.explanation}
      </div>
    </ReactTooltip>
  )
}

export const GlossaryTooltips = (props: GlossaryTooltipsProps): JSX.Element => {
  const { getPhraseDetails, glossaryIds } = props

  const renderTooltips = R.map(id => (
    <PhraseTooltip
      id={id}
      key={`phrase-tooltip-${id}`}
      getPhraseDetails={getPhraseDetails}
    />
  ))(glossaryIds)

  return <TooltipsContainer>{renderTooltips}</TooltipsContainer>
}

export default GlossaryTooltips

const TooltipsContainer = styled.div`
  .__react_component_tooltip {
    text-align: center !important;
    background-color: ${({ theme }) => theme.palette.biege} !important;
    opacity: 1 !important;
    color: ${({ theme }) => theme.palette.textDark} !important;
    border: 1px solid ${({ theme }) => theme.palette.darkblue03} !important;
    border-radius: ${({ theme }) => theme.shape.borderRadiusBig} !important;
    padding: 10px !important;
    margin-top: 0px !important;
    box-shadow: ${({ theme }) => theme.shadows.darkShadow} !important;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: -0.1px;

    &::before,
    &::after {
      display: none;
    }
  }

  .phrase {
    font-weight: bold;
  }
`
