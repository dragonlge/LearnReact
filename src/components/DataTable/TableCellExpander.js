import React from 'react'
import ExpanderButton from './ExpanderButton'

const TableCellExpander = ({ row, expanded, onRowExpandToggled, disabled }) => {
  console.log('TableCellExpander', onRowExpandToggled)
  return (
    <td>
      <ExpanderButton onToggled={onRowExpandToggled} expanded={expanded} />
    </td>
  )
}

export default TableCellExpander
