import React, { useState } from 'react'
import Modal from '../Modal'
import styled from 'styled-components'
import cx from 'classnames'
import {
  reverse,
  identity,
  ifElse,
  prop,
  pipe,
  sortBy,
  map,
  filter,
  propEq,
  not,
  length
} from 'ramda'

import NavigationIcon from '../../../../examIcons/Navigation'
import DownIcon from '../../../../examIcons/Down'
import UpIcon from '../../../../examIcons/Up'
import FlagMark from '../../../../examIcons/FlagMark'

export interface NavigationItemProps {
  order: number
  status: string
  flagged: boolean
  onClickHandler: () => any
  displayName: string
}

interface NavigationModalProps {
  handleClose: () => void
  open: boolean
  items: NavigationItemProps[]
  [x: string]: any
}

const columnIds = {
  question: 'order',
  status: 'status',
  flag: 'flagged'
}

const questionStatuses = {
  incomplete: 'incomplete',
  complete: 'complete',
  unseen: 'unseen'
}

const NavigationRow = ({
  status,
  flagged,
  onClickHandler,
  displayName
}: NavigationItemProps): JSX.Element => {
  const statusClass = cx({
    'question-status': true,
    'question-status--error':
      status === questionStatuses.incomplete ||
      status === questionStatuses.unseen
  })

  return (
    <tr>
      <td>
        <div className='question-name' onClick={onClickHandler}>
          {displayName}
        </div>
      </td>
      <td>
        <div className={statusClass}>{status}</div>
      </td>
      <td>
        <div className='question-flagged'>{flagged ? <FlagMark /> : ''}</div>
      </td>
    </tr>
  )
}

const NavigationModal = ({
  open,
  handleClose,
  items,
  ...rest
}: NavigationModalProps): JSX.Element => {
  const [sortDir, setSortDir] = useState('asc')
  const [sortedColumnId, setSortedColumnId] = useState(columnIds.question)

  const sortedItems = pipe(
    map(item => ({ ...item, flagged: `${item.flagged}` })),
    sortBy(prop(sortedColumnId)),
    ifElse(() => sortDir === 'asc', identity, reverse),
    map(item => ({ ...item, flagged: item.flagged === 'true' }))
  )(items)

  const Rows = sortedItems.map(item => {
    const handleClick = () => {
      item.onClickHandler()
      handleClose()
    }

    return (
      <NavigationRow
        key={item.displayName}
        status={item.status}
        order={item.order}
        flagged={item.flagged}
        onClickHandler={handleClick}
        displayName={item.displayName}
      />
    )
  })

  const handleColumnHeaderClick = columnId => () => {
    setSortDir(sortDir === 'desc' ? 'asc' : 'desc')
    setSortedColumnId(columnId)
  }

  const sortIcon = sortDir === 'asc' ? <UpIcon /> : <DownIcon />

  const toCompleteCount = pipe(
    filter(pipe(propEq('status', questionStatuses.complete), not)),
    length
  )(items)

  return (
    <Modal
      noOverflow
      disableOutsideClick
      handleClose={handleClose}
      open={open}
      title={
        <div>
          <NavigationIcon /> <strong>Navigation</strong> - select a question to
          go to it
        </div>
      }
      initWidth={1100}
      initHeight={600}
      showBottomResizeIcons
      showBottomCloseButton
      {...rest}
    >
      <NavigationModalContainer>
        <div className='table-container'>
          <table>
            <thead>
              <tr>
                <th style={{ width: '32%' }}>
                  <div onClick={handleColumnHeaderClick(columnIds.question)}>
                    <span>Question #</span>
                    {sortedColumnId === columnIds.question && sortIcon}
                  </div>
                </th>
                <th style={{ width: '32%' }}>
                  <div onClick={handleColumnHeaderClick(columnIds.status)}>
                    <span>Status</span>
                    {sortedColumnId === columnIds.status && sortIcon}
                  </div>
                </th>
                <th>
                  <div onClick={handleColumnHeaderClick(columnIds.flag)}>
                    <span>Flagged for Review</span>
                    {sortedColumnId === columnIds.flag && sortIcon}
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>{Rows}</tbody>
          </table>
        </div>
        <div>{toCompleteCount} Unseen/Incomplete</div>
      </NavigationModalContainer>
    </Modal>
  )
}

NavigationModal.defaultProps = {}

export default NavigationModal

export const NavigationModalContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 10px;

  table {
    width: 100%;
    max-width: 100%;
    background-color: ${props => props.theme.exam.original.white};
    border-spacing: 0;
    width: 100%;
    margin-bottom: 18px;
    border-collapse: separate;
    *border-collapse: collapsed;
    border-radius: 2px;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }

  thead,
  tbody {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }

  tr {
    padding: 0;
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }

  th {
    text-align: center;
    color: ${props => props.theme.exam.original.white};
    background-color: ${props => props.theme.exam.original.blue01};
    padding: 5px;
    border-radius: 2px 0 0 0;
  }

  table tbody tr:nth-child(odd) td {
    background-color: ${props => props.theme.exam.original.white};
  }

  table tbody tr:nth-child(even) td {
    background-color: ${props => props.theme.exam.original.grey10};
  }

  table tbody tr:hover td {
    background-color: ${props => props.theme.exam.original.yellow02};
  }

  table tbody tr:last-child td {
    border-bottom: 1px solid ${props => props.theme.exam.original.black};
  }

  table td {
    display: table-cell;
    line-height: 21px;
    text-align: left;
    vertical-align: top;
    padding: 5px;
    border-top: 1px solid ${props => props.theme.exam.original.black};
    border-left: 1px solid ${props => props.theme.exam.original.black};
    color: ${props => props.theme.exam.original.black};
  }

  table th {
    display: table-cell;
    line-height: 21px;
    text-align: center;
    vertical-align: top;
    padding: 5px;
    cursor: pointer;
  }

  table th:not(:first-child) {
    border-left: 1px solid ${props => props.theme.exam.original.grey09};
  }

  .question-status--error {
    color: ${props => props.theme.exam.original.red02};
  }

  .question-status {
    text-transform: capitalize;
  }

  .question-flagged {
    color: ${props => props.theme.exam.original.blue02};
    text-align: center;
  }

  .question-name:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  .table-container {
    flex-grow: 1;
    overflow: auto;
    max-height: 1000px;
    background-color: ${props => props.theme.exam.original.white};

    &::-webkit-scrollbar-track {
      box-shadow: ${props => props.theme.shadows.scrollbarTrack};
      background-color: ${props => props.theme.exam.original.white};
    }

    &::-webkit-scrollbar {
      -webkit-appearance: none;
      width: 18px;
    }

    &::-webkit-scrollbar-thumb {
      -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
      background-color: ${props => props.theme.exam.original.blue01};
      box-shadow: ${props => props.theme.shadows.scrollbarThumb};
    }

    &::-webkit-scrollbar-button:start:decrement,
    &::-webkit-scrollbar-button:end:increment {
      height: 18px;
      width: 18px;
      display: block;
      background-color: ${props => props.theme.exam.original.blue01};
    }

    &::-webkit-scrollbar-button:vertical:increment {
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4gcTDx43AHTppQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAm0lEQVQ4y+2Suw3CQBBE39xdjoREE27FvVABIR1QAEW4EIhcByHB2UPAIVlgI+wMySNNsp+3u9LCqv+TxoNhj9hg8qDGiIS5mf703pNGQWIn4gH5Y4TVHe0ZqwbFa1RyVLoXOyheFtysuoBysYXquZxYtmoKzEGxGeZmgUDVCwSqvoHSBKh75tya/gwY3Jb6vPQ1tsWT77LqNz0Anmsn5gIKn8AAAAAASUVORK5CYII=);
      background-size: cover;
      background-repeat: no-repeat;
      border-top: 1px solid ${props => props.theme.exam.original.white};
    }

    &::-webkit-scrollbar-button:vertical:decrement {
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAAlwSFlzAAALEwAACxMBAJqcGAAAAVlpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KTMInWQAAAKJJREFUOBHtUcENwjAQu0vSBRijq3QnPswBSzAI7MGnzz5Kgx2cX4QieCE1kuvcxbbSi9m+fpmAy3wAE1y19646v4m6EMIFOMtTep3+IosSj9FTJlCP6tUzlZ+piN3jtQZx/00QPZNCVjDBW00K66fg4a6gBUxk9G79CVBiuKfoQ5mNwrQfMs9aYc1X2DZ7mD2PMKxAfXL+WrJscyto7/3jBF4VyyFYXSX8JQAAAABJRU5ErkJggg==);
      background-size: cover;
      background-repeat: no-repeat;
      border-bottom: 1px solid ${props => props.theme.exam.original.white};
    }

    &::-webkit-scrollbar-button:horizontal:increment {
      background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAAAsTAAALEwEAmpwYAAABWWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgpMwidZAAAAvElEQVQ4Ee1ROw7CMAy1nSJ2jsHSg1BmbsHKxNR7cAl6DaQusHASpCbuM1KkKC2RmGDokyzZsd/zJ0QL/uECchSRNpnEwTf7FnJ2vFJh6cHcJewKPifx25X8IYkHIgVDasdVx+yuyG1heEciQ0kodn2B44W4geAd614QbzIdKgnltTGeTGMJ2/cTImFtBYG0U/UnLPWYI5QmQhMGL/RehwYiewiYyOyxC9/JNYvegoYDyE+Y1VpjD1vwywuMc2QovmDQf+cAAAAASUVORK5CYII=');
      background-size: cover;
      background-repeat: no-repeat;
      border-right: 1px solid ${props => props.theme.exam.original.white};
    }

    &::-webkit-scrollbar-button:horizontal:decrement {
      background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAAAsTAAALEwEAmpwYAAABWWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgpMwidZAAAAyUlEQVQ4Ee1Ruw3CQAy1fUH0jAFsQlgie1BRIRZgEJaABtEgsUQmSO7FzkfKSQ6iSpUnOXf+vdjviBbMpkD48SfLiRqsRkTOAO/VfZr/D1iLslHhQVhegVdKKKdRPLmOG4aETVCpbZnDRYjzLtEOZnEXHtFG17gypOg7aj2NYK1m07owDTxMNnjFFvOIyhhjUaPaRcJda0x0m8bQ7tdd069HNIj9AeqjEuag+O638qRoGaeeP2p2eP4vCDcWygAqdahHOsviza5AA+J9L9WtRJHRAAAAAElFTkSuQmCC');
      background-size: cover;
      background-repeat: no-repeat;
      border-left: 1px solid ${props => props.theme.exam.original.white};
    }
  }
`
