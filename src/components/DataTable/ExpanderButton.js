import React from 'react'

const ExpanderButton = ({ expanded, row, onToggled, disabled }) => {
  // console.log('expanded====>', expanded)
  console.log('expanded====>', onToggled)

  // const icon = console.dir(icon)
  // {
  //   expanded ? '☞' : '☟'
  // }
  const handleToggle = (e) => onToggled && onToggled(row, e)

  return <div onClick={handleToggle}>{!expanded ? '☞' : '☟'}</div>
}

export default ExpanderButton
