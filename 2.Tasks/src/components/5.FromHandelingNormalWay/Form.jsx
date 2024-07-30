import React from 'react'

const Form = () => {
  const handleSubmit = (e) =>
  {
    e.preventDefault();
    const formData = new FormData(e.target);
    const obj = Object.fromEntries(formData.entries());
    console.log(obj)
  }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          gap:'8px'
          
        }} className="container">
          <input type="text" placeholder='Enter name' name='name' />
          <input type="text" placeholder='email' name='email' />
          <input type="text" name="password" placeholder="enter password" />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Form