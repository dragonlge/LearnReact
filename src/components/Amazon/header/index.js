import React, { useState, useCallback, useEffect } from 'react'
import Product from '../Product'
import useClosure from 'use-closure'

import './style.css'
var a = 1
console.log(window.a)

function Header() {
  const [count, setCount] = useState(1)
  const aRef = React.useRef(1)
  const [countA, setCountA] = useState(0)
  const countARef = React.useRef()
  // useCallBack will return a memoized version of the callback to prevent unnecessary renders
  const onClickChild = useClosure(() => {
    // Nooo! `count` will always be 1
    console.log('current', count)
  })

  // useEffect(() => {
  //   const handler = setInterval(() => {
  //     setCount((count) => count + 1)
  //   }, 1000 * 1)

  //   return () => {
  //     clearInterval(handler)
  //   }
  // }, [])
  React.useLayoutEffect(() => {
    console.log('useLayOutEffectCountA', countA)
    console.log('useLayOutEffectRef', countARef.current)
  }, [countA])
  React.useEffect(() => {
    countARef.current = countA
    console.log('useEffectCountA', countA)
    console.log('useEffectRef', countARef.current)
  }, [countA])
  // const [bstate, setBState] = useState[1]
  const [bstate, setBState] = useState(0)

  const updateA = (value) => () => {
    console.log('updateA')
    return (value += 1)
  }
  // const [offset, setOffset] = useState(0)

  console.log(a)
  const deleteMe = (checked) => {
    //if state changed
    if (checked) {
      //{pkgInfos:[]}
      //data come to
      // if length == 0  append to array
      //1 check length > 1 compare if true immuatable update
      //if not true  append to array
      // cycle 2 length >1 true immutable update, else
      //3 delete me logic
      // get pkgInfos array
      // if (ok)=====> dispatch action delete ===>return code delete global variables
      //setSelect(0)
    }
    if (!checked) {
      //data come in
      // if(length ===0 ) do nothing
      // check length  >  1  find item immuatable update
      // if not find reset data ???
    }
    //deal with expand ?
    //
  }
  const click = () => {
    setCountA(Math.ceil(Math.random() * 10))
    a = a + 1
    setBState(bstate + 1)
    updateA(1)
    aRef.current = aRef.current + 1
    console.log('Click A', a)
    console.log('aRef', aRef.current)
  }
  const clickUseCallBack = React.useCallback(click, [bstate])
  return (
    <header className='row'>
      {console.log('rendered')}
      <div>
        <a
          href='#'
          className='brand'
          onClick={() => {
            setCountA(countA + 1)
          }}
        >
          amazon
        </a>
      </div>
      <div>count: {count}</div>
      <div className='yellowA'>countA: {countA}</div>
      {typeof countARef.current !== 'undefined' && (
        <div className='yellow'>Previous : {countARef.current}</div>
      )}
      <div>
        <a href='cart.html'>Cart</a>
        <a href='signin.html'>Sign In</a>
      </div>
    </header>
  )
}

export default Header
