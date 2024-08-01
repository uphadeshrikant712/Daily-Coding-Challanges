import React, { useState } from 'react'
import Card from './Card';

const Todo = () => {
  const [data, setData] = useState([]);
  const [list, setList] = useState('');

  const handleAddData = () =>
  {
    if (data.length != 0)
    {
      setList([...list, data]);
      setData('')
    }
  }
  return (
    <div>
      <h1>ToDO List</h1>
      <div style={{
        display: 'flex',
        alignItems: "center",
        justifyContent: "space-between",
        gap: "10px",
        paddingTop:"20px"
      }} className="input ">
        <input onChange={(e)=>setData(e.target.value)} type="text" value={data}/>
        <button onClick={handleAddData}>Add Task</button>
      </div>
      <Card list={ list} />
    </div>
  )
}

export default Todo