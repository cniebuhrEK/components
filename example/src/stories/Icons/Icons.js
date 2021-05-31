import React from 'react'
import styled from 'styled-components'

import {
  AddIcon,
  ArrowDownIcon,
  CloseIcon,
  EyeIcon,
  HideIcon,
  ListIcon,
  StudentIcon,
  TrashIcon,
  UserIcon,
  SuccessIcon,
  InfoIcon,
  WarningIcon,
  WarningReversed,
  UsersIcon,
  EditIcon,
  PlayIcon,
  PauseIcon,
  StopIcon,
  PlusIcon,
  ScoreIcon,
  ArrowUpFilledIcon,
  ArrowDownFilledIcon
} from 'components'

/**
 * Primary UI component for user interaction
 */
export const Icons = props => {
  return (
    <IconsContainer>
      <AddIcon /> &nbsp;&nbsp;AddIcon <br />
      <br />
      <ArrowDownIcon /> &nbsp;&nbsp;ArrowDownIcon <br />
      <br />
      <CloseIcon /> &nbsp;&nbsp;CloseIcon <br />
      <br />
      <EyeIcon /> &nbsp;&nbsp;EyeIcon <br />
      <br />
      <HideIcon /> &nbsp;&nbsp;HideIcon <br />
      <br />
      <ListIcon /> &nbsp;&nbsp;ListIcon <br />
      <br />
      <StudentIcon /> &nbsp;&nbsp;StudentIcon <br />
      <br />
      <TrashIcon /> &nbsp;&nbsp;TrashIcon <br />
      <br />
      <UserIcon /> &nbsp;&nbsp;UserIcon <br />
      <br />
      <SuccessIcon /> &nbsp;&nbsp;SuccessIcon <br />
      <br />
      <InfoIcon /> &nbsp;&nbsp;InfoIcon <br />
      <br />
      <WarningIcon /> &nbsp;&nbsp;WarningIcon <br />
      <br />
      <WarningReversed /> &nbsp;&nbsp;WarningReversed <br />
      <br />
      <UsersIcon /> &nbsp;&nbsp;UsersIcon <br />
      <br />
      <EditIcon /> &nbsp;&nbsp;EditIcon <br />
      <br />
      <PlayIcon /> &nbsp;&nbsp;PlayIcon <br />
      <br />
      <PauseIcon /> &nbsp;&nbsp;PauseIcon <br />
      <br />
      <StopIcon /> &nbsp;&nbsp;StopIcon <br />
      <br />
      <PlusIcon /> &nbsp;&nbsp;PlusIcon <br />
      <br />
      <ScoreIcon /> &nbsp;&nbsp;ScoreIcon <br />
      <br />
      <ArrowUpFilledIcon /> &nbsp;&nbsp;ArrowUpFilledIcon <br />
      <br />
      <ArrowDownFilledIcon /> &nbsp;&nbsp;ArrowDownFilledIcon <br />
      <br />
    </IconsContainer>
  )
}

Icons.propTypes = {}

Icons.defaultProps = {}

const IconsContainer = styled.div`
  svg {
    font-size: 20px;
  }
`
