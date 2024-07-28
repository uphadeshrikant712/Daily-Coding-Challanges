import React, { useEffect, useRef, useState } from 'react';
import './image.css';
import data from './data.json';

const data_length = data.length;

const ImageCarouseal = () => {
  const [index, setIndex] = useState(0);
  const ref = useRef(null)
  const handlePrev = () =>
  {
    if (index == 0)
    {
      setIndex(data_length - 1);
    }
    else
    {
      setIndex(index - 1);
      }
  }
  const handleNext = () =>
  {
    setIndex((prevIndex) =>
    {
      if (prevIndex == data_length - 1)
      {
        return 0;
      }
      else
      {
        return prevIndex + 1;
        }
    })
  }
  useEffect(() =>
  {
    ref.current = setInterval(handleNext, 1000)
    return () =>
    {
      clearInterval(ref.current)
    }
  },[])
  return (
    <div onMouseEnter={() => clearInterval(ref.current)} onMouseLeave={() =>
      ref.current = setInterval(handleNext,1000)
    } >
      <div onClick={handlePrev} className="prev-btn">{ "<"}</div>
      <img src={ data[index].download_url} alt="" />
      <div onClick={handleNext} className="next-btn">{ ">"}</div>
    </div>
  )
}

export default ImageCarouseal