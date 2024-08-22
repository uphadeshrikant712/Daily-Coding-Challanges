import React, { useEffect, useState } from 'react';
import './countup.css';

const CountUp2 = () => {
  const [count, setCount] = useState(0);
  useEffect(() =>
  {
    const intervalId = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < 60) {

          return prevCount + 5;
        }
        else {
          return prevCount;
        }
      })
    }, 100);

    return () => clearInterval(intervalId);
  }, [])
  return (
    <>
    <h2>Counters</h2>
    <div className='inner'>
      <div className="first">
        <h1>Counter1</h1>
        <p>{count <= 60 ? count : 60 }</p>
      </div>
      <div className="second">
        <h1>Counter2</h1>
        <p>{count <= 50 ? count : 50}</p>
      </div>
      </div>
      </>
  )
}

export default CountUp2