// Icons/AllIcons.tsx - All icons

import React from 'react'
import styled from 'styled-components'
import * as R from 'ramda'

import {
  AddIcon,
  ArrowDownIcon,
  ArrowRightIcon,
  BookIcon,
  ClockIcon,
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
  ExcelIcon,
  OtherExamIcon,
  EditorImageIcon,
  EditorHighlightIcon,
  ToMuchInformationIcon,
  VideoIcon,
  ClinicalContextIcon,
  MCATThinkIcon,
  ScannerIcon,
  GlossaryIcon,
  ResizeIcon,
  SaltyBucksIcon,
  SaltyBucksCounterIcon,
  ReloadIcon,
  SubtractIcon,
  BoxClosedIcon,
  AttachmentIcon,
  PreviewIcon,
  VideoCameraIcon,
  ExamEditorIcon,
  StudentContainedIcon,
  CoursesIcon,
  GlossaryContainedIcon,
  BooksContainedIcon,
  FlashcardsIcon,
  WalletsIcon,
  GearIcon,
  NavArrowLeftIcon,
  NavArrowRightIcon,
  NavArrowUpIcon,
  NavArrowDownIcon,
  DashboardIcon,
  GamesIcon,
  NotesIcon,
  VideoPreviewIcon,
  ProjectionsIcon,
  DragIcon,
  ContentQuestionsIcon
} from './'

const IconContainer = styled.div`
  display: flex;
  margin-bottom: 16px;
  flex-flow: row;
  align-items: center;

  p {
    margin-right: 8px;
  }
`

const AllIcons = () => {
  const icons = [
    { component: AddIcon, title: 'AddIcon' },
    { component: ArrowDownIcon, title: 'ArrowDownIcon' },
    { component: ArrowRightIcon, title: 'ArrowRightIcon' },
    { component: BookIcon, title: 'BookIcon' },
    { component: ClockIcon, title: 'ClockIcon' },
    { component: CloseIcon, title: 'CloseIcon' },
    { component: EyeIcon, title: 'EyeIcon' },
    { component: HideIcon, title: 'HideIcon' },
    { component: ListIcon, title: 'ListIcon' },
    { component: StudentIcon, title: 'StudentIcon' },
    { component: TrashIcon, title: 'TrashIcon' },
    { component: UserIcon, title: 'UserIcon' },
    { component: SuccessIcon, title: 'SuccessIcon' },
    { component: InfoIcon, title: 'InfoIcon' },
    { component: WarningIcon, title: 'WarningIcon' },
    { component: WarningReversed, title: 'WarningReversed' },
    { component: UsersIcon, title: 'UsersIcon' },
    { component: EditIcon, title: 'EditIcon' },
    { component: PlayIcon, title: 'PlayIcon' },
    { component: PauseIcon, title: 'PauseIcon' },
    { component: StopIcon, title: 'StopIcon' },
    { component: PlusIcon, title: 'PlusIcon' },
    { component: ScoreIcon, title: 'ScoreIcon' },
    { component: ArrowUpFilledIcon, title: 'ArrowUpFilledIcon' },
    { component: ArrowDownFilledIcon, title: 'ArrowDownFilledIcon' },
    { component: MCATIcon, title: 'MCATIcon' },
    { component: MiniMCATIcon, title: 'MiniMCATIcon' },
    { component: FlagIcon, title: 'FlagIcon' },
    { component: SelectIcon, title: 'SelectIcon' },
    { component: LineIcon, title: 'LineIcon' },
    { component: LogoutIcon, title: 'LogoutIcon' },
    { component: PolygonIcon, title: 'PolygonIcon' },
    { component: CircleIcon, title: 'CircleIcon' },
    { component: PaletteIcon, title: 'PaletteIcon' },
    { component: ImageIcon, title: 'ImageIcon' },
    { component: TextIcon, title: 'TextIcon' },
    { component: UndoIcon, title: 'UndoIcon' },
    { component: RedoIcon, title: 'RedoIcon' },
    { component: DownloadIcon, title: 'DownloadIcon' },
    { component: SaveIcon, title: 'SaveIcon' },
    { component: ToggleIcon, title: 'ToggleIcon' },
    { component: ExcelIcon, title: 'ExcelIcon' },
    { component: OtherExamIcon, title: 'OtherExamIcon' },
    { component: EditorImageIcon, title: 'EditorImageIcon' },
    { component: EditorHighlightIcon, title: 'EditorHighlightIcon' },
    { component: ToMuchInformationIcon, title: 'ToMuchInformationIcon' },
    { component: VideoIcon, title: 'VideoIcon' },
    { component: ClinicalContextIcon, title: 'ClinicalContextIcon' },
    { component: MCATThinkIcon, title: 'MCATThinkIcon' },
    { component: ScannerIcon, title: 'Scanner' },
    { component: GlossaryIcon, title: 'GlossaryIcon' },
    { component: ResizeIcon, title: 'ResizeIcon' },
    { component: SaltyBucksIcon, title: 'SaltyBucksIcon' },
    { component: SaltyBucksCounterIcon, title: 'SaltyBucksCounterIcon' },
    { component: ReloadIcon, title: 'ReloadIcon' },
    { component: SubtractIcon, title: 'SubtractIcon' },
    { component: BoxClosedIcon, title: 'BoxClosedIcon' },
    { component: AttachmentIcon, title: 'AttachmentIcon' },
    { component: PreviewIcon, title: 'PreviewIcon' },
    { component: ExamEditorIcon, title: 'ExamEditorIcon' },
    { component: StudentContainedIcon, title: 'StudentContainedIcon' },
    { component: CoursesIcon, title: 'CoursesIcon' },
    { component: GlossaryContainedIcon, title: 'GlossaryContainedIcon' },
    { component: BooksContainedIcon, title: 'BooksContainedIcon' },
    { component: FlashcardsIcon, title: 'FlashcardsIcon' },
    { component: WalletsIcon, title: 'WalletsIcon' },
    { component: VideoCameraIcon, title: 'VideoCameraIcon' },
    { component: NavArrowRightIcon, title: 'NavArrowRightIcon' },
    { component: NavArrowLeftIcon, title: 'NavArrowLeftIcon' },
    { component: NavArrowUpIcon, title: 'NavArrowUpIcon' },
    { component: NavArrowDownIcon, title: 'NavArrowDownIcon' },
    { component: GearIcon, title: 'GearIcon' },
    { component: DashboardIcon, title: 'DashboardIcon' },
    { component: GamesIcon, title: 'GamesIcon' },
    { component: NotesIcon, title: 'NotesIcon' },
    { component: VideoPreviewIcon, title: 'VideoPreviewIcon' },
    { component: ProjectionsIcon, title: 'ProjectionsIcon' },
    { component: DragIcon, title: 'DragIcon' },
    { component: ContentQuestionsIcon, title: 'ContentQuestionsIcon' }
  ]

  const sortedIcons = R.sortBy(R.prop('title'))(icons)

  return (
    <IconsContainer>
      {sortedIcons.map(
        ({ component: I, title }, i: number): JSX.Element => (
          <IconContainer key={i}>
            <p>{`${title}:`}</p>
            <I />
          </IconContainer>
        )
      )}
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
