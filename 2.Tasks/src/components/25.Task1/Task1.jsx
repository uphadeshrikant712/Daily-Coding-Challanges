import React, { useRef, useState } from 'react'

const Task1 = () => {
  const [name, setName] = useState('...');
  const [value, setValue] = useState('');

  const inputRef = useRef(null);

  
  const handleClick = () =>
  {
    if (value)
    {
      setName(value);
      setValue('');
     
    }
    else {
      alert('Enter Name Please...')
    }
    inputRef.current.focus();
  }

  return (
    <div>
      <div className="inp">
        <input
          ref={inputRef}
          value={value}
          onChange=
          {
            (e) =>
              setValue(e.target.value)
          }
          type="text"
          placeholder='Enter Name...' />
        <button onClick={handleClick}>Enter</button>
      </div>
      <h2>Your Name is {name}</h2>
    </div>
  )
}

export default Task1