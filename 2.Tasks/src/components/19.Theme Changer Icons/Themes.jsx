import React, { useEffect, useState } from 'react';
import './themes.css';
import { CiSun } from "react-icons/ci";
import { IoMoon } from "react-icons/io5";

const Themes = () => {

  const [dark, setDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  useEffect(() => {
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark]);

  return (
    <div className={`${dark ? 'dark' : 'light'}`}>
      <button onClick={() => setDark(!dark)}>
        {
          dark ? <CiSun className='sun'/> : <IoMoon className='moon'/>
        }
        </button>
    </div>
  )
}

export default Themes