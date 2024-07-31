import React, { useState } from 'react';
import './counter.css';


const Counter = () => {
  const [value, setValue] = useState(0);
  return (
    <div className='counter'>
      <h1>Normal Counter</h1>
      <h2>{value}</h2>
      <div className="operations">
        <button onClick={()=>setValue(value + 1)}>Increment</button>
        <button onClick={()=> value === 0 ? setValue(value = 0) : setValue(value -1)}>Decrement</button>
        <button onClick={()=>setValue( value +5)}>Increment by 5</button>
        <button onClick={() => value === 0 ? setValue(value = 0): setValue(value - 5)}>Decrement by 5</button>
      </div>
      
    </div>
  )
}

export default Counter