import { render } from '@testing-library/react'
import React, { useState, useEffect } from 'react'
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom'
import Board from '../Board'
import Card from '../Card'
import DataTable from '../DataTable/DataTable'
import Test from '../Test'
import './index.css'
import json from '../DataTable/people.json'
import TableRow from '../DataTable/TableRows'
import TableHeadRow from '../DataTable/TableHeadRow'
import TableCell from '../DataTable/TableCell'
import ExpanderButton from '../DataTable/ExpanderButton'
import TableCellExpander from '../DataTable/TableCellExpander'
import TableRows from '../DataTable/TableRows'

function pageData({ data, per = 50, page = 1 }) {
  return data.slice(per * (page - 1), per * page)
}

function About(props) {
  const { url, path } = useRouteMatch()
  // console.log(json)
  console.log('about', url)
  console.log('about', path)
  const [state, setState] = useState({
    data: pageData({ data: json }),
    loading: false,
    page: 1,
    sortedBy: { first_name: 'ascending' },
  })
  useEffect(() => {
    if (!state.sortedBy) return
    const sortKey = Object.keys(state.sortedBy)[0]
    const direction = state.sortedBy[sortKey]

    setState((prev) => ({
      ...prev,
      data: prev.data.sort((a, b) => {
        if (direction === 'ascending') {
          if (a[sortKey] > b[sortKey]) {
            return -1
          } else {
            return 1
          }
        }
        if (direction === 'descending') {
          if (a[sortKey] > b[sortKey]) {
            return 1
          } else {
            return -1
          }
        }
        //firefox worked
        // return direction === 'ascending'
        //   ? a[sortKey] > b[sortKey]
        //   : a[sortKey] < b[sortKey]

        //   direction === 'ascending'
        //     ? a[sortKey] > b[sortKey]
        //     : a[sortKey] < b[sortKey]

        // return retData
      }),
    }))
    debugger
  }, [state.sortedBy])
  // const [people, setPeople] = useState(pageData(json))
  // const [loading, setLoading] = useState(false)

  function loadMore() {
    console.dir('LOAD MORE')
    if (state.loading) return
    setState((prev) => ({
      ...prev,
      loading: true,
    }))
    setState((prev) => ({
      data: [...prev.data, ...pageData({ data: json, page: prev.page + 1 })],
      loading: false,
      page: prev.page + 1,
    }))
  }
  const renderHead = () => {
    return (
      <>
        <TableHeadRow />

        <TableHeadRow
          label='ID'
          sortedBy={state.sortedBy}
          sort={{ key: 'id', changer: setState }}
        />

        <TableHeadRow
          // sortable
          label='First Name'
          sortedBy={state.sortedBy}
          sort={{ key: 'first_name', changer: setState }}
        />

        <TableHeadRow
          sortedBy={state.sortedBy}
          label='Last Name'
          sort={{ key: 'last_name', changer: setState }}
        />
        <TableHeadRow
          sortedBy={state.sortedBy}
          label='Email'
          sort={{ key: 'email', changer: setState }}
        />
        <TableHeadRow label='Gender' />
        <TableHeadRow label='IP Address' />
      </>
    )
  }
  const customerExpandRowComponent = () => {
    return (
      <tr>
        <td colSpan={7}>asb</td>
      </tr>
    )
  }
  const renderRow = (row, enableRowExpand, onRowClicked) => {
    // onRowClicked={(e, row) => onRowClicked(e, row)}
    return (
      <>
        <TableRows
          defaultExpanded
          row={row}
          enableRowExpand
          onRowClicked={onRowClicked}
          onRowExpandToggled={onRowExpandToggled}
          expandableRowsComponent={customerExpandRowComponent}
        ></TableRows>
      </>
    )
  }
  const onRowExpandToggled = (togoleState, row) => {
    console.log(togoleState)
    console.log(row)
  }
  const onRowClicked = (row, e) => {
    console.dir(row)
    console.dir(e)
  }
  return (
    <div className=''>
      <h1>Usage of DataTable</h1>
      <div>
        <DataTable
          noTableHead
          data={state.data}
          renderHead={renderHead}
          renderRow={renderRow}
          loadMore={loadMore}
          onRowClicked={(e, row) => onRowClicked(e, row)}
          enableRowExpand
        ></DataTable>
        {/* <Board id='board-1' className='board'>
          <Card id='card-1' className='card' draggable='true'>
            <p>Card one </p>
          </Card>
        </Board>
        <Board id='board-2' className='board'>
          <Card id='card-2' className='card' draggable='true'>
            <p>Card two</p>
          </Card>
        </Board> */}
      </div>
      <Link to={'/tab/about/1'}>go one</Link>
    </div>
  )
}

export default About
