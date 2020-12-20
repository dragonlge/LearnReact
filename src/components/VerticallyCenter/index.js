import React from 'react'
import './index.css'
function VerticallyCenter() {
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyItems: 'center',
          margin: '2px',
          padding: '5px',
        }}
      >
        <div className='table'>
          <p>Center me </p>
        </div>
        <div className='absolute'>
          <p>Center me </p>
        </div>
        <div className='flexbox'>Center me </div>
        <div className='grid'> Center me </div>
        <div className='margins'>
          <p>Center me </p>{' '}
        </div>
      </div>
    </>
  )
}

export default VerticallyCenter
