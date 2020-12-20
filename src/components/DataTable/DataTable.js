import React from 'react'
import NoData from './NoData'
import TableBody from './TableBody'
import TableHead from './TableHead'
import './styles.css'
const DataTable = ({
  data,
  noDataComponent,
  noTableHead,
  renderHead,
  renderRow,
  loadMore,
  enableRowExpand,
  onRowClicked,
}) => {
  const showTableHead = () => {
    if (noTableHead) {
      return true
    }
  }
  return (
    <table className='__dv_table' cellSpacing={0} cellPadding={0}>
      {/* table header section start */}
      {showTableHead() && (
        <TableHead
          className='dv_table_head'
          renderHead={renderHead}
        ></TableHead>
      )}
      {/* table header section end */}

      {/* render nodata component start  */}

      {!data.length > 0 && <NoData>{noDataComponent}</NoData>}
      {/* render nodata component end */}
      {/* render TableBody component start  */}

      {data.length > 0 && (
        <TableBody
          renderRow={renderRow}
          rows={data}
          loadMore={loadMore}
          onRowClicked={onRowClicked}
        ></TableBody>
      )}
      {/* render TableBody component end  */}
    </table>
  )
}

export default DataTable
