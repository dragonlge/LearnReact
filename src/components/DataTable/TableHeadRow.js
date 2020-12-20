import React from 'react'

function TableHeadRow({
  setState,
  sortedBy,
  sorted,
  sortable = false,
  label,
  sort,
}) {
  const upIcon =
    sortedBy && sortedBy[sort.key] === 'ascending' ? 'upIcon active' : 'upIcon'
  console.log('upIcon', upIcon)
  const downIcon =
    sortedBy && sortedBy[sort.key] === 'descending'
      ? 'downIcon active'
      : 'downIcon'
  // const onClick = React.useCallback(() => {
  //   ;(direction) => {
  //     setState((prev) => ({
  //       ...prev,
  //       sortedBy: { first_name: direction },
  //     }))
  //   }
  // }, [setState])
  function changeSort(direction) {
    sort.changer((prev) => ({
      ...prev,
      sortedBy: { [sort.key]: direction },
    }))
  }
  return (
    <th>
      <div className='flex-container'>
        <div className='flex-full'>{label}</div>
        {/* check if sortable */}
        {sort ? (
          <div>
            <span className={upIcon} onClick={() => changeSort('ascending')}>
              ↑
            </span>
            <span className={downIcon} onClick={() => changeSort('descending')}>
              ↓
            </span>
          </div>
        ) : null}
        {/*end sortable block*/}
      </div>
    </th>
  )
}

export default TableHeadRow
