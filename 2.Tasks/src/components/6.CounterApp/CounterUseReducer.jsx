import React, { useReducer, useState } from 'react'
import './counter.css';

const reducer = (state, action) =>
{
  switch (action.type)
  {
    case 'inc':
      return state + 1;
    case 'dec':
      if (state === 0)
      {
        return state = 0;
      }
      return state - 1;
    case 'inc_by_5':
      return state + 5;
    case 'dec_by_5':
      if (state <= 0)
      {
        return state = 0;
      }
      return state - 5;
    case 'add_value':
      return state + Number(action.payload);
  }
}

const CounterUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, 0);
  const [value, setValue] = useState('');
  return (
    <div className='counter'>
      <h1>UseReducer Counter</h1>
      <h2>{state}</h2>
      <div className="operations">
        <button onClick={() => {
          dispatch({type:'inc'})
        }}>Increment</button>
        <button onClick={() =>
        {
          dispatch({type:'dec'})
          }
        }>Decrement</button>
        <button onClick={() =>
        {
          dispatch({type:'inc_by_5'})
          }
        }>Incrment by 5</button>
        <button onClick={() => {
          dispatch({type:'dec_by_5'})
        }}>Decrement by 5</button>
      </div>
      <div className="input">
        <input type="text" placeholder='Enter value here to add value' onChange={(e) =>
        {
          setValue(e.target.value)
          }
        } />
        <button onClick={() => {
          dispatch({
            payload: value,
            type:'add_value'
          })
        }}>Add Value</button>
      </div>
    </div>
  )
}

export default CounterUseReducer