import * as R from 'ramda'

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
