import React from 'react'
import useClickOutsideV1 from '../hooks/useClickOutsideV1';

export default function Menu() {
 const menuRef = React.useRef();
 
 const onClickOutside = () => {
   console.log('Clicked Outside')
 }
 
 useClickOutsideV1(menuRef,onClickOutside);





 return (
  <div ref={menuRef}>
   <p>Click me </p>
  </div>
 )
}
 
 
