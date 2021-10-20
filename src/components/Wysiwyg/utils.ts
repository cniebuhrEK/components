import * as R from 'ramda'

export const getGlossaryIds = deltaObject =>
  R.pipe(
    R.propOr([], 'ops'),
    R.filter(R.hasPath(['attributes', 'glossary'])),
    R.map(R.pathOr('', ['attributes', 'glossary']))
  )(deltaObject)
