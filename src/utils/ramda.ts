import { not, isNil, isEmpty, addIndex, map } from 'ramda'

export const isNotNil = (value: any) => not(isNil(value))
export const isNotEmpty = (value: any) => not(isEmpty(value))
export const isNilOrEmpty = (value: any) => isEmpty(value) || isNil(value)
export const isNotNilOrEmpty = (value: any) =>
  isNotNil(value) && isNotEmpty(value)
export const mapIndexed = addIndex(map)
