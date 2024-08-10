import React, { useState } from 'react'

const New = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1 style={{
        paddingBottom:"10vh"
      }}>Normal Counter</h1>
      <h1 style={{
        paddingBottom:"40px"
      }} >{ count}</h1>
      <button onClick={()=>setCount(count+1)}>Count +1</button>
      <button onClick={()=>setCount(count -1)}>Count -1</button>
      <button onClick={()=>setCount( count+5)}>Count + 5</button>
      <button onClick={()=>setCount( count*5)}>Count * 5</button>
    </div>
  )
}

export default New