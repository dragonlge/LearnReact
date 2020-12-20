import React from 'react'
import DataTable from '../DataTable'

function Contact() {
  let model = {
    headers: [
      //{title:"Id",accessor: "id", index: 0, dataType: "number"},
      // {
      //   title: 'photo',
      //   accessor: 'photo',
      //   width: '80px',
      //   index: 1,
      //   cell: (row) => <div className='rating'></div>,
      // },
      // {
      //   title: 'Profile',
      //   accessor: 'profile',
      //   width: '80px',
      //   index: 1,
      //   cell: {
      //     type: 'image',
      //     style: {
      //       width: '80px',
      //     },
      //   },
      // },
      {
        title: 'Name',
        accessor: 'name',
        width: '300px',
        index: 2,
        dataType: 'string',
      },
      { title: 'Age', accessor: 'age', index: 3, dataType: 'number' },
      {
        title: 'Qualification',
        accessor: 'qualification',
        index: 4,
        dataType: 'number',
      },
      {
        title: 'Rating',
        accessor: 'rating',
        index: 5,
        width: '200px',
        cell: (row) => {
          console.log(row)
          return (
            <div className='rating'>
              <div
                style={{
                  backgroundColor: 'lightskyblue',
                  textAlign: 'center',
                  height: '1.9em',
                  width: (row.rating / 5) * 201 + 'px',
                  margin: '3px 0 4px 0',
                }}
              >
                <a href={`/showchart/${row.id}`}>{row.rating}</a>
              </div>
            </div>
          )
        },
      },
    ],
    data: [
      {
        id: -1,

        name: 'q',
        age: 29,
        qualification: 'B.Com',
        rating: 3,
        profile: 'https://png.icons8.com/nolan/50/000000/user.png',
      },
      {
        id: 0,
        name: 'v',
        age: 29,
        qualification: 'B.Com',
        rating: 3,
        profile: 'https://png.icons8.com/nolan/50/000000/user.png',
      },
      {
        id: 1,
        name: 'a',
        age: 29,
        qualification: 'B.Com',
        rating: 3,
        profile: 'https://png.icons8.com/nolan/50/000000/user.png',
      },
      {
        id: 2,
        name: 'b',
        age: 35,
        qualification: 'B.Sc',
        rating: 5,
        profile: 'https://png.icons8.com/nolan/50/000000/user.png',
      },
      {
        id: 3,
        name: 'c',
        age: 42,
        qualification: 'B.E',
        rating: 3,
        profile: 'https://png.icons8.com/nolan/50/000000/user.png',
      },
    ],
  }

  for (var i = 4; i <= 20; i++) {
    model.data.push({
      id: i,
      name: 'name ' + i,
      age: i + 18,
      qualification: 'Graduate',
      rating: i % 2 ? 3 : 4,
      profile: 'https://png.icons8.com/dotty/50/000000/cat-profile.png',
    })
  }
  const [state, setState] = React.useState(model)
  const [counter, setCounter] = React.useState(0)
  const [expandedRows, setExpandedRows] = React.useState([1])
  const handelEnableCheckBox = (row) => {
    console.log('handelEnableCheckBox', row)
    setCounter(1)
    const expandedList = [...expandedRows]
    expandedRows.push(row.id)
    // setExpandedRows(expandedList, row.id)
    console.warn(counter)
    return <p>hello</p>
  }
  return (
    <div>
      <h1>Contact</h1>
      <DataTable
        className='data-table'
        title='customer Datatable'
        keyField='id'
        headers={state.headers}
        data={state.data}
        enableCheckBox={false}
        noData='No records'
        // expandedRows={expandedRows}
        // enableCheckBox={handelEnableCheckBox}
      />
    </div>
  )
}

export default Contact
