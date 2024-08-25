import React, { useState } from 'react';

const Task = () => {
  const [name, setName] = useState('...');
  const [value, setValue] = useState('');

  const handleClick = ()=>
  {
    if (value)
    {
      setName(value);

      setValue('')
    }
    else
    {
      alert('Please enter name')
      }
  }

  return (
    <div>
      <div className="inp">
      <input onChange={(e)=>setValue(e.target.value)} type="text" value={value} placeholder='Enter your Name...' />
    <button onClick={handleClick}>Enter</button>
      </div>
      <h2>Your Name is {name}</h2>
    </div>
  )
}

export default Task