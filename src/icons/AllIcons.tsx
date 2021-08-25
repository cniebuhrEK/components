// Icons/AllIcons.tsx - All icons

import React from 'react'
import styled from 'styled-components'

import {
  AddIcon,
  ArrowDownIcon,
  ArrowRightIcon,
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
  ArrowDownFilledIcon,
  MCATIcon,
  MiniMCATIcon,
  FlagIcon,
  SelectIcon,
  LineIcon,
  LogoutIcon,
  PolygonIcon,
  CircleIcon,
  PaletteIcon,
  ImageIcon,
  TextIcon,
  UndoIcon,
  RedoIcon,
  DownloadIcon,
  SaveIcon,
  ToggleIcon,
  ExcelIcon
} from './'

/**
 * Primary UI component for user interaction
 */
const AllIcons = () => {
  return (
    <IconsContainer>
      <AddIcon /> &nbsp;&nbsp;AddIcon <br />
      <br />
      <ArrowDownIcon /> &nbsp;&nbsp;ArrowDownIcon <br />
      <br />
      <ArrowRightIcon /> &nbsp;&nbsp;ArrowRightIcon <br />
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
      <MCATIcon /> &nbsp;&nbsp;MCATIcon <br />
      <br />
      <MiniMCATIcon /> &nbsp;&nbsp;MiniMCATIcon <br />
      <br />
      <FlagIcon /> &nbsp;&nbsp;FlagIcon <br />
      <br />
      <SelectIcon /> &nbsp;&nbsp;SelectIcon <br />
      <br />
      <LineIcon /> &nbsp;&nbsp;LineIcon <br />
      <br />
      <PolygonIcon /> &nbsp;&nbsp;PolygonIcon <br />
      <br />
      <CircleIcon /> &nbsp;&nbsp;CircleIcon <br />
      <br />
      <PaletteIcon /> &nbsp;&nbsp;PaletteIcon <br />
      <br />
      <ImageIcon /> &nbsp;&nbsp;ImageIcon <br />
      <br />
      <TextIcon /> &nbsp;&nbsp;TextIcon <br />
      <br />
      <UndoIcon /> &nbsp;&nbsp;UndoIcon <br />
      <br />
      <RedoIcon /> &nbsp;&nbsp;RedoIcon <br />
      <br />
      <DownloadIcon /> &nbsp;&nbsp;DownloadIcon <br />
      <br />
      <SaveIcon /> &nbsp;&nbsp;SaveIcon <br />
      <br />
      <ToggleIcon /> &nbsp;&nbsp;ToggleIcon <br />
      <br />
      <LogoutIcon /> &nbsp;&nbsp;LogoutIcon <br />
      <br />
      <ExcelIcon /> &nbsp;&nbsp;ExcelIcon <br />
      <br />
    </IconsContainer>
  )
}

AllIcons.defaultProps = {}

const IconsContainer = styled.div`
  color: ${({ theme }) => theme.palette.darkblue01};
  svg {
    font-size: 20px;
  }
`

export default AllIcons
