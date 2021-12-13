import * as R from 'ramda'
import { HIGHLIGHT_COLORS } from '../HighlightColorPicker/HighlightColorPicker'
import {
  GREEN_HIGHLIGHTS_BLOT_NAME,
  YELLOW_HIGHLIGHTS_BLOT_NAME,
  PURPLE_HIGHLIGHTS_BLOT_NAME,
  BLUE_HIGHLIGHTS_BLOT_NAME,
  RED_HIGHLIGHTS_BLOT_NAME,
  ORANGE_HIGHLIGHTS_BLOT_NAME
} from './customBlots'

export const getGlossaryIds = deltaObject =>
  R.pipe(
    R.propOr([], 'ops'),
    R.filter(R.hasPath(['attributes', 'glossary'])),
    R.map(R.pathOr('', ['attributes', 'glossary']))
  )(deltaObject)

export const getRealTextWithAdditionalInsertsAsPlaceholders = deltaObject =>
  R.pipe(
    R.propOr([], 'ops'),
    R.map(
      R.pipe(
        R.prop('insert'),
        R.ifElse(ins => typeof ins === 'string', R.identity, R.always(' '))
      )
    ),
    R.join(''),
    R.toLower
  )(deltaObject)

export const HIGHLIGHT_BLOTS = {
  [HIGHLIGHT_COLORS.green]: GREEN_HIGHLIGHTS_BLOT_NAME,
  [HIGHLIGHT_COLORS.yellow]: YELLOW_HIGHLIGHTS_BLOT_NAME,
  [HIGHLIGHT_COLORS.purple]: PURPLE_HIGHLIGHTS_BLOT_NAME,
  [HIGHLIGHT_COLORS.blue]: BLUE_HIGHLIGHTS_BLOT_NAME,
  [HIGHLIGHT_COLORS.red]: RED_HIGHLIGHTS_BLOT_NAME,
  [HIGHLIGHT_COLORS.orange]: ORANGE_HIGHLIGHTS_BLOT_NAME
}
