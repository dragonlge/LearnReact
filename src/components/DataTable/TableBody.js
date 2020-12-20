import React, { useRef, useEffect, useState } from 'react'

const TableBody = ({
  renderRow,
  loadMore,
  rows,
  enableRowExpand,
  onRowClicked,
}) => {
  const tbodyRef = useRef(null)
  useEffect(() => {
    document.addEventListener('scroll', handleScroll)
    return () => document.removeEventListener('scroll', handleScroll)
  }, [])
  function handleScroll(e) {
    // console.dir(e)
    const cY = window.scrollY
    const tbodyHeight = tbodyRef.current.offsetHeight
    const threshHold = 1000
    if (tbodyHeight - cY - threshHold < 0) loadMore()
  }
  return (
    <tbody ref={tbodyRef}>
      {rows.map((row) => renderRow(row, enableRowExpand, onRowClicked))}
      {/* {() => renderBody(row)} */}
    </tbody>
  )
}

export default TableBody
