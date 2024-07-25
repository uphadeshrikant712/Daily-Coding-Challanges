import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa';
import './starRating.css';

const StarRating = ({ noOfStars = 9 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (getCurrentIndex) =>
  {
    setRating(getCurrentIndex);
  }
  const handleMouseEnter = (getCurrentIndex) =>
  {
    setHover(getCurrentIndex);
  }
  const handleMouseLeave = () =>
  {
    setHover(rating);
  }
  return (
    <div>
      {
        [...Array(noOfStars)].map((_, index) =>
        {
          index +=1
          return (
            <FaStar className={index <= ( hover || rating) ? 'active' : 'inactive'} size={40} key={index} onClick={()=> handleClick(index)} onMouseMove={()=>handleMouseEnter(index)} onMouseLeave={()=>handleMouseLeave}/>
          )
        })
      }
    </div>
  )
}

export default StarRating