import React, { useState } from 'react'

const Button = () => {
  const [count,setCount]=useState(0)
  return (
    <div>
      <h1 style={{
        paddingBottom:'25px'
      }}>Count Increasing on clicking Button</h1>
      <button onClick={()=>setCount(count +1)}>count = { count}</button>
    </div>
  )
}

export default Button