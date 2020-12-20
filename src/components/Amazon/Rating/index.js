import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faStar,
  faStarHalf,
  faStarOfDavid,
} from '@fortawesome/free-solid-svg-icons'
function Rating(props) {
  const { rating, numReviews } = props
  console.log(rating)
  var icon1 =
    rating >= 1
      ? { faStar }
      : rating >= 0.5
      ? { faStarHalf }
      : { faStarOfDavid }
  var icon2 =
    rating >= 2
      ? { faStar }
      : rating >= 1.5
      ? { faStarHalf }
      : { faStarOfDavid }
  var icon3 =
    rating >= 3
      ? { faStar }
      : rating >= 2.5
      ? { faStarHalf }
      : { faStarOfDavid }
  var icon4 =
    rating >= 4
      ? { faStar }
      : rating >= 3.5
      ? { faStarHalf }
      : { faStarOfDavid }
  var icon5 =
    rating >= 5
      ? { faStar }
      : rating >= 4.5
      ? { faStarHalf }
      : { faStarOfDavid }
  console.log(icon1)
  console.log(icon2)

  console.log(icon3)

  console.log(icon4)

  console.log(icon5)

  return (
    <div className='rating'>
      <span>
        {/* <FontAwesomeIcon icon={faHome}/> */}
        <FontAwesomeIcon icon={faStarHalf} />
        <FontAwesomeIcon icon={faStarOfDavid} />
        <FontAwesomeIcon icon={icon3.faStar} />
        <FontAwesomeIcon icon={icon4.faStar} />
        <FontAwesomeIcon icon={icon5.faStar} />

        {/* <FontAwesomeIcon icon={faCoffee} /> */}
        {/* <i className='fa fa-start'></i>
                  <i className='fa fa-start'></i>
                  <i className='fa fa-start'></i>
                  <i className='fa fa-start'></i>
                  <i className='fa fa-start'></i> */}
      </span>
      <span>{numReviews + 'reviews'}</span>
    </div>
  )
}

export default Rating
