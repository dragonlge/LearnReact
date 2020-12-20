import React, { useEffect, useState } from 'react'
import './index.css'
function DataTable(props) {
  console.log('props')
  const noData = props.nodData || 'No records found!'
  const keyField = props.keyField || 'id'
  const [expand, setExpand] = useState(false)
  const expandViewRef = React.useRef([])
  const [expandIds, setExpandIds] = useState([])
  const [expandedRows, setExpandRows] = useState(props.expandedRows)
  // useEffect(() => {
  //   setExpandRows(props.expandedRows)
  // }, [props.expandedRows])
  let initialState = {
    headers: props.headers,
    data: props.data,
    enableCheckBox: props.enableCheckBox,
  }
  // const expensiveInitialState = React.useMemo(() => {
  //   return {
  //     headers: props.headers,
  //     data: props.data,
  //     enableCheckBox: props.enableCheckBox,
  //   }
  // }, [props])
  const triggerHeaderCheckBox = (e) => {
    console.log('triggerHeader', e)
  }
  const renderHeaderCheckBox = () => {
    if (initialState.enableCheckBox) {
      const columnHeader = {
        title: () => (
          <input
            type='checkbox'
            id='checkbox'
            value='second_checkbox'
            checked={false}
            onChange={(e) => triggerHeaderCheckBox(e)}
          />
        ),
        accessor: 'checkbox',
        width: '80px',
        index: 1,
        cell: (row) => (
          <div className='headerCheckbox'>
            <input
              type='checkbox'
              id='checkbox'
              value='second_checkbox'
              checked={false}
              // onChange={(e) => triggerHeaderCheckBox(e)}
            />
          </div>
        ),
      }
      initialState.headers = [columnHeader].concat(initialState.headers)
      // console.log('initialState', expensiveInitialState)
    }
  }
  // const renderHeaderCheckBoxWithCallback = React.useCallback(
  //   renderHeaderCheckBox,
  //   [expensiveInitialState]
  // )
  // const [tableState, setTableState] = React.useState(expensiveInitialState)
  // const [selectedRow, setSelectRow] = useState()
  const renderTableHeader = () => {
    let { headers } = initialState
    console.log('renderTableHeader', headers)
    // renderHeaderCheckBoxWithCallback()
    let columnHeader = {
      title: () => (
        <input
          type='checkbox'
          id='checkbox'
          value='second_checkbox'
          checked={false}
          onChange={(e) => triggerHeaderCheckBox(e)}
        />
      ),
      accessor: 'headerCheckbox',
      width: '80px',
      index: 1,
      cell: (row) => (
        <div className='headerCheckbox'>
          <input
            type='checkbox'
            id='checkbox'
            value='second_checkbox'
            checked={false}
            // onChange={(e) => triggerHeaderCheckBox(e)}
          />
        </div>
      ),
    }
    // const remakeHeader = [columnHeader].concat(headers)
    const remakeHeader = headers

    let headerView = null
    console.log('remakeHeader', remakeHeader)

    headerView = remakeHeader.map((header, index) => {
      let title = header.title
      let cleanTitle = header.accessor
      let width = header.width
      if (typeof title === 'function') {
        debugger
        title = title()
      }
      return (
        <th key={cleanTitle} style={{ width: width }} data-col={cleanTitle}>
          <span data-col={cleanTitle}>{title}</span>
        </th>
      )
    })

    return headerView
  }

  const handleRowClick = (row) => {
    console.log('handleRowClick', row)
    console.log('handleRowClick', typeof expandIds)

    //  expandViewRef.current.push(row.id)
    console.log('handleRowClick', expandViewRef.current)
    setExpandRows(props.expandedRows)
    // setExpandIds(...expandIds, [row.id])
    setExpand(true)
    // setSelectRow(row.id)
  }
  const renderContent = () => {
    console.log('renderContent')
    let { headers, data } = initialState
    let columnHeader = {
      title: () => (
        <input
          type='checkbox'
          id='checkbox'
          value='second_checkbox'
          checked={false}
          onChange={(e) => triggerHeaderCheckBox(e)}
        />
      ),
      accessor: 'headerCheckbox',
      width: '80px',
      index: 1,
      cell: (row) => (
        <div className='headerCheckbox'>
          <input
            type='checkbox'
            id='checkbox'
            value='second_checkbox'
            checked={false}
            // onChange={(e) => triggerHeaderCheckBox(e)}
          />
        </div>
      ),
    }
    //const remakeHeader = [columnHeader].concat(headers)
    const remakeHeader = headers

    // let data = tableState.data
    // let expandView = []
    let contentView = data.map((row, rowIdx) => {
      let id = row[keyField]
      debugger

      // headers.map((header, index) => {
      //   if (typeof props.enableCheckBox === 'function' && expand) {
      //     expandView = props.enableCheckBox(row)
      //   }
      // })

      let tds = remakeHeader.map((header, index) => {
        let content = row[header.accessor]
        let cell = header.cell
        debugger
        if (cell) {
          if (typeof cell === 'object') {
            if (cell.type === 'image' && content) {
              content = <img style={cell.style} src={content} />
            }
          } else if (typeof cell === 'function') {
            content = cell(row)
            // if (expand && index === 0) {
            //   expandView = props.enableCheckBox(row)
            // }
          } else if (typeof cell === 'input') {
            debugger
          }
        }
        return (
          <>
            <td key={index} data-id={id} data-row={rowIdx}>
              {content}
            </td>

            {/* <tr>
              <td colSpan={5}>{expandView}</td>
            </tr> */}
          </>
        )
      })
      // console.log('tds', tds)
      // if (row.id === selectedRow && expand) {
      //   expandViewRef.current.push(props.enableCheckBox(row))
      //   console.log('expandView', expandViewRef.current)
      // }
      return (
        <>
          <tr key={Math.random()} onClick={() => handleRowClick(row)}>
            {tds}
          </tr>
          <tr>
            <td colSpan={5}>
              {/* {props.expandedRows.map((id) => {
                return props.enableCheckBox(row)
              })} */}
              {/* {rowIdx} */}
              {/* {row.id === selectedRow && expand
                ? props.enableCheckBox(row)
                : null} */}
              {/* {expandViewRef.current.length > 0
                ? expandViewRef.current.map((id) => {
                    if (id === row.id) {
                      return props.enableCheckBox(row)
                    }
                  })
                : null} */}
              {/* {expandViewRef.current} */}
            </td>
          </tr>
        </>
      )
    })
    return contentView
  }
  const renderNoData = () => {
    return (
      <tr>
        <td colSpan={props.headers.length}>{noData}</td>
      </tr>
    )
  }
  const renderTable = () => {
    let title = props.title || 'Data Table'
    let headerView = renderTableHeader()
    let contentView = props.data.length > 0 ? renderContent() : renderNoData()
    return (
      <table className='data-inner-table'>
        <thead>
          <tr>{headerView}</tr>
        </thead>
        <tbody>{contentView}</tbody>
      </table>
    )
  }

  return <div className={props.className}>{renderTable()}</div>
}

export default DataTable
