import React from 'react'
import Rating from '../Rating'
import './index.css'
// import { fa,faStar } from '@fortawesome/free-solid-svg-icons'
// import {faHome} from '@fortawesome/free-regular-svg-icons'

function Product(props) {
  const { product } = props

  // let src = 'https://amazona.webacademy.pro/images/'
  // src = src+srcIndex;

  return (
    // <div className='row center'>
    <div key={product._id} className='card'>
      <a href={`/product/${product._id}`}>
        <img className='medium' src={product.image} alt='product' />
        <div className='card-body'>
          <a href={`/product/${product._id}`}>
            <h2>Nick Slim Shirts</h2>
          </a>
          <Rating
            rating={product.rating}
            numReivews={product.numReivews}
          ></Rating>

          <div className='price'>$120</div>
        </div>
      </a>
    </div>
    // </div>
  )
}

export default Product
