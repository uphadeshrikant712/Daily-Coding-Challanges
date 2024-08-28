import React, { useState } from 'react'

const BgChanger = () => {
  const [active, setActive] = useState('start');

  const handleClick = (option) =>
  {
    setActive(option)
  };
  return (
    <div className='flex items-center justify-center py-12 gap-1'>

      <button
        onClick={() => handleClick('start')}
        className={` px-7 py-6 rounded-t-md ease-in duration-300 transition-all ${active === 'start' ? 'bg-black text-white' : 'bg-indigo-700 text-white hover:bg-black'} `}>Start</button>

      <button
        onClick={() => handleClick('stop')}
        className={` px-7 py-6 rounded-t-md text-white ease-in duration-300 transition-all ${active === 'stop' ? 'bg-black' : 'bg-indigo-600 hover:bg-black'}`}>Stop</button>
    
    </div>
  )
}

export default BgChanger