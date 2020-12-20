import React from 'react'
import './styles.css'
const TextField = ({ value, onChange, placeholder, label }) => {
  return (
    <input
      className='__DV_text-field'
      type='text'
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    ></input>
  )
}

export default TextField
