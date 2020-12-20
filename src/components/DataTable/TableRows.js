import React, { useState, useEffect, useCallback } from 'react'
import RowExpander from './RowExpander'
import TableCell from './TableCell'
import TableCellExpander from './TableCellExpander'
import TableRow from './TableRow'
function convertUnicode(input) {
  return input.replace(/\\u(\w\w\w\w)/g, function (a, b) {
    var charcode = parseInt(b, 16)
    return String.fromCharCode(charcode)
  })
}

function TableRows({
  children,
  onRowClicked,
  defaultExpanded,
  defaultExpanderDisabled,
  enableRowExpand,
  row,
  onRowExpandToggled,
  expandableRowsComponent,
}) {
  console.log('TableRow', onRowClicked)
  const [expanded, setExpanded] = useState(defaultExpanded)
  useEffect(() => {
    setExpanded(defaultExpanded)
  }, [defaultExpanded])
  const onRowExpanded = useCallback(() => {
    setExpanded(!expanded)
    onRowExpandToggled(!expanded, row)
  }, [expanded, onRowExpandToggled, row])

  const handleOnRowClick = useCallback(
    (e) => {
      if (e.target) {
        onRowClicked(row, e)

        if (!defaultExpanderDisabled && enableRowExpand) {
          onRowExpanded()
        }
      }
    },
    [defaultExpanderDisabled, enableRowExpand, onRowExpanded, onRowClicked, row]
  )

  return (
    <>
      <TableRow handleOnRowClick={handleOnRowClick}>
        {enableRowExpand ? (
          <TableCellExpander
            row={row}
            expanded={expanded}
            onRowExpandToggled={onRowExpanded}
            disabled={false}
          />
        ) : null}

        <TableCell label={row.id} />
        <TableCell label={row.first_name} />
        <TableCell label={row.last_name} />
        <TableCell label={row.email} />
        <TableCell label={row.gender} />
        <TableCell label={row.ip_address} />
      </TableRow>
      {/* {enableRowExpand && expanded && (
        <RowExpander
          // key={`expander--${row[i]}`}
          data={row}
          // extendedRowStyle={inheritStyles}
        >
          <tr>asd</tr>
        </RowExpander>
      )} */}
      <TableRow
        row={row}
        expanded={expanded}
        enableRowExpand
        customerExpandRowComponent={expandableRowsComponent}
      />
    </>
  )
}

export default TableRows
