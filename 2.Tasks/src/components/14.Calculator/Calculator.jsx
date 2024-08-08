import React, { useState } from 'react';
import './calculator.css';

const Calculator = () => {

  const [value, setValue] = useState('');

  const arr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '*', '/', 'C', '='];



  const handleClick = (e) => {
    const id = e.target.id;

    if (id === 'C') {
      setValue('')
    }
    else if (id === '=') {

      try {
        const ans = eval(value);
        setValue(ans)
      } catch (error) {
        alert("Invalid Input");
      }
    }
    else {
      setValue((val) => val + id);
    }
  }
  console.log(value)
  return (
    <div className='calculator'>
     
        <h1>Calculator App </h1>
      
      <input onChange={(e) => setValue(e.target.value)} value={value} type="text" placeholder='Enter values...' />

      <div onClick={handleClick} className="containet">
        {
          arr.map((item, index) =>
          (
            <button id={item} key={index} >{item}</button>
          ))
        }
      </div>
    </div>
  )
}

export default Calculator