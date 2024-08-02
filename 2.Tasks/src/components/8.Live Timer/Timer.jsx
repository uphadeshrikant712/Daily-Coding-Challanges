import React, { useEffect, useState } from 'react'

const Timer = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() =>
  {
    const timerId = setInterval(() => {
      setTime(new Date())
    }, 1000);

    return () => clearInterval(timerId);
  },[])


  return (
    <div>
      <h1>Timer</h1>

      <p>{time.toLocaleTimeString() }</p>
    </div>
  )
}

export default Timer