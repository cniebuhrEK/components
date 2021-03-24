import {
  head,
  pipe,
  ifElse,
  propOr,
  isEmpty,
  always,
  find,
  propEq
} from 'ramda'

export const getHeadErrorOrEmptyObj = pipe(
  propOr([], 'errors'),
  ifElse(isEmpty, always({}), head)
)

export const getOptionByValue = (value: string | number | boolean) => (
  options: { label: string; value: string | number | boolean }[]
) => pipe(find(propEq('value', value)))(options)
