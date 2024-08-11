import React, { useState } from 'react'
import './theme.css'

const Theme = () => {
  const [dark, setDark] = useState(false);
  return (
    <div className={`${dark ? 'dark' : 'light' }`}>
      <button onClick={() => setDark(!dark)}>{ `${dark ? 'Dark' : 'Light'} Theme`}</button>
    </div>
  )
}

export default Theme