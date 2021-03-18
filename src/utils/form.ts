import {
  head,
  pipe,
  ifElse,
  propOr,
  isEmpty,
  always,
  find,
  propEq,
} from 'ramda'

export const getHeadErrorOrEmptyObj = pipe(
  propOr([], 'errors'),
  ifElse(isEmpty, always({}), head)
)

export const getOptionByValue = (value: string) => (
  options: { label: string; value: string }[]
) => pipe(find(propEq('value', value)))(options)
