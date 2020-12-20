import React from 'react'
import RowExpander from './RowExpander'
import TableCell from './TableCell'

const TableRow = ({
  children,
  handleOnRowClick,
  enableRowExpand,
  expanded,
  customerExpandRowComponent,
  row,
}) => {
  return (
    <>
      {enableRowExpand && expanded && (
        <RowExpander
          // key={`expander--${row[i]}`}
          data={row}
          // extendedRowStyle={inheritStyles}
        >
          {customerExpandRowComponent()}
          {/* <tr>
            <td colSpan={7}>asb</td>
          </tr> */}
        </RowExpander>
      )}
      {!enableRowExpand && !expanded && (
        <tr onClick={(e) => handleOnRowClick(e)}>{children} </tr>
      )}
    </>
  )
}

export default TableRow
