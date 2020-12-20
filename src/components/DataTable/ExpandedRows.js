import React, { Children, cloneElement } from 'react'

const ExpandedRows = ({data, children}) => {
  const renderChildren = (children, data) => {
    return Children.map(children, (child) => cloneElement(child, { data }))
  }

  return <>{renderChildren(children, data)}</>
}

export default ExpandedRows
