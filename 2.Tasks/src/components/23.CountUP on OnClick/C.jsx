import React, { useRef, useState } from 'react'

const C = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);

  const handleStart = () => {
    if (!countRef.current) {
      countRef.current = setInterval(() => {
        setCount((prevCount) => prevCount + 5);
      }, 100);
    }
  };
  const handleStop = () =>
  {
    if (countRef.current)
    {
      clearInterval(countRef.current);
      countRef.current = null;
    }
  }
  return (
    <div>
      <h2>Normal Count Start & Stops by Clicking Buttons</h2>
      <h1>{count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  )
}

export default C