import React, { useState } from 'react';
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import './password.css';

const PasswordEye = () => {
  const [eye, setEye] = useState(true);
  return (
    <div className='Main'>
      <div className="heading">
        <h1>Password Eye Toggle Feature</h1>
      </div>
      <div className="passwordEye">
        <input className='input' type={`${eye ? "password" : "text"}`} placeholder='Enter Password here !' />
        <p onClick={()=>setEye(!eye)}>
          {eye ? <IoIosEye size={30} /> : <IoIosEyeOff size={30} />}
        </p>
      </div>
    </div>
  )
}

export default PasswordEye