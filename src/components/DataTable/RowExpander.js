import React, { Children, cloneElement } from 'react'

const RowExpander = ({ data, children }) => {
  const renderChildren = (children, data) => {
    return Children.map(children, (child) => cloneElement(child, { data }))
  }

  return renderChildren(children, data)
}

export default RowExpander
