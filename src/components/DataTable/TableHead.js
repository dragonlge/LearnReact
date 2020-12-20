import React from 'react'

function TableHead({ renderHead }) {
  console.log('tableHead', renderHead)
  return (
    <thead>
      <tr>{renderHead()}</tr>
    </thead>
  )
}

export default TableHead
