import React, { useEffect, useState } from 'react'

const ThemeChanger = () => {
  const [dark, setDark] = useState(() =>
  {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  })
  useEffect(() =>
  {
    localStorage.setItem('theme' , dark ? 'dark' : 'light')
  },[dark])

  
  return (
    <div className={`${dark ? 'dark' : 'light'}`}>
      <button onClick={()=>setDark(!dark)}>{ `${dark ? 'Switch to Light' : 'Switch to Dark'} Theme`}</button>
    </div>
  )
}

export default ThemeChanger