import React, { useState } from 'react'

const NT = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className='flex items-center justify-center bg-gray-900 h-screen w-full text-white'>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={()=>setIsHovered(false)}
        className="card relative w-[280px] h-[300px] bg-gradient-to-r from-pink-700 to-black/60 flex items-center justify-center overflow-hidden rounded-md">

        <h1>Card 1</h1>

        <div className={`overlay-card w-full absolute bottom-0 top-0 transition-all duration-300 ease-in bg-gradient-to-r  from-blue-700 to-pink-700  flex items-center justify-center ${isHovered ? 'transform translate-y-0' : 'transform translate-y-full'} `}>
          <h1>CardOverlay</h1>
        </div>
      </div>
    </div>
  )
}

export default NT;
