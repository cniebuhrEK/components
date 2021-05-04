import React, { useState } from 'react'
import styled from 'styled-components'
import MinusSign from '../../../examIcons/MinusSign'
import PlusSign from '../../../examIcons/PlusSign'
import cx from 'classnames'

interface CollapseProps {
  header: JSX.Element | string
  content: JSX.Element | string
}

const Collapse = (props: CollapseProps): JSX.Element => {
  const [collapsed, setIsCollapsed] = useState(false)

  const toggleCollapse = () => setIsCollapsed(prevState => !prevState)

  const { header, content } = props

  const headerClass = cx({
    collapse_header: true,
    'collapse_header--collapsed': collapsed
  })

  return (
    <CollapseContainer>
      <div className={headerClass}>
        <div onClick={toggleCollapse}>
          {collapsed ? <PlusSign /> : <MinusSign />}
        </div>
        <h2>{header}</h2>
      </div>
      <div className='collapse_content'>{content}</div>
    </CollapseContainer>
  )
}

Collapse.defaultProps = {}

export default Collapse

export const CollapseContainer = styled.div`
  .collapse_header {
    background-color: ${props => props.theme.palette.blue01};
    color: ${props => props.theme.palette.white};
    position: relative;
    height: 25px;
    font-size: 13px;
    border-bottom: 1px solid ${props => props.theme.palette.white};
    display: flex;
    align-items: center;

    svg {
      cursor: auto;
      font-size: 18px;
      margin: 2px 10px 0 5px;
    }

    h2 {
      font-family: ${props => props.theme.typography.fontFamilySecondary};
      font-size: 18.6667px;
      line-height: 24px;
      font-weight: 400 !important;
    }
  }

  .collapse_header--collapsed + .collapse_content {
    display: none;
  }
`
