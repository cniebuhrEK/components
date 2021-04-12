import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { EntitiesList, Button, AddIcon } from 'components'
import { headers, rows } from "./tableData";

export const FullTable = props => {
  const [tableState, setTableState] = useState({ sortBy: 'firstname', dir: 'DESC', page: 1 })

  const handleTableStateChange = state => {
    setTableState(state)
  }

  return (
    <div>
      <div>
        sortBy: {tableState.sortBy} dir: {tableState.dir} page: {tableState.page}
      </div>
      <br />
      <br />
      <EntitiesList
        size={props.size}
        resultsText={'40 admins'}
        tableActions={<Button startIcon={<AddIcon />}>Add admin</Button>}
        headers={props.headers}
        rows={props.rows}
        totalPages={props.totalPages}
        emptyStateText={props.emptyStateText}
        defaultSortColumnId='firstname'
        defaultSortDirection='DESC'
        defaultPage={1}
        onTableStateChange={handleTableStateChange}
      />
    </div>
  )
}

FullTable.propTypes = {
  /**
   * Pagination total pages
   */
  totalPages: PropTypes.number,
  /**
   * Rows that will be displayed inside the table
   */
  rows: PropTypes.array,
  /**
   * Headers that will be displayed inside the table
   */
  headers: PropTypes.array,
  /**
   * Empty state text
   */
  emptyStateText: PropTypes.string,
  /**
   * Column id by which the table will be sorted on initial state
   */
  defaultSortColumnId: PropTypes.string,
  /**
   * Sort direction by which the table will be sorted on initial state
   */
  defaultSortDirection: PropTypes.oneOf(['DESC', 'ASC']),
  size: PropTypes.oneOf(['xs', 's', 'm']),
  /**
   * Page number by which the table will be paginated on initial state
   */
  defaultPage: PropTypes.number,
  /**
   * Function that is triggered when the sort or page is changed
   */
  onTableStateChange: PropTypes.func
}

FullTable.defaultProps = {
  totalPages: 20,
  emptyStateText: 'Rows are empty',
  headers: headers,
  rows: rows,
  defaultSortColumnId: 'firstname',
  defaultSortDirection: 'DESC',
  size: 's',
  defaultPage: 1
};
