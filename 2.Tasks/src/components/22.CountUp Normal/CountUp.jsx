import React, { useEffect, useState } from 'react'

const CountUp = () => {
  const [count, setCount] = useState(0);
  useEffect(() =>
  {
    const intervalId = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < 50) {
          return prevCount + 5;
        }
        else {
          return prevCount;
        }
      })
    }, 100);

    return () => clearInterval(intervalId);
  },[])
  return (
    <div>
      <h2>Counter till 50</h2>
      <h1>{ count}</h1>
    </div>
  )
}

export default CountUp