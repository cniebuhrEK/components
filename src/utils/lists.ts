export const DEFAULT_ROWS_PER_PAGE = 50
export const ROWS_PER_PAGE_VALUES = [5, 10, 50, 100]

export type RowsPerPageType = 5 | 10 | 50 | 100 | 12 | 48 | 52 | 96 | 104

export interface Option {
  label: string
  value: number
}
