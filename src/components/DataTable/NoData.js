import React from 'react'

const NoData = ({ children }) => {
  const noData = children || 'No records found!'

  return <div className='dv_table_nodata'>{noData}</div>
}

export default NoData
