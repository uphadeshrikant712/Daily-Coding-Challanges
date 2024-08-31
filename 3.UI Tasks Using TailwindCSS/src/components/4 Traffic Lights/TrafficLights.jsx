import React, { useEffect, useState } from 'react'

const TrafficLights = () => {
  const [activeLight, setActiveLight] = useState('');

  useEffect(() =>
  {
    const lightOn = setInterval(() => {
      setActiveLight((prevLight) => {
        switch (prevLight) {
          case 'red':
            return 'yellow';
          case 'yellow':
            return 'green';
          default:
            return 'red';
        };
      })
    }, 2000);

    return () => clearInterval(lightOn);
  },[])

  return (
    <div className=' w-full h-screen bg-gray-800 flex items-center justify-center flex-col'>
      <h1 className='text-2xl text-white py-4 font-mono '>Traffic Signal Using React</h1>
      <div className="trafficLight bg-black w-[120px] h-[250px] rounded-md flex items-center justify-center gap-4 flex-col">

        <div className={`red w-12 h-12  rounded-full 
        ${activeLight === 'red' ? 'bg-red-600' : 'bg-gray-400'} `}></div>
        <div className={`red w-12 h-12 bg-red-600 rounded-full 
        ${activeLight === 'yellow' ? 'bg-yellow-600' : 'bg-gray-400'} `}></div>
        <div className={`red w-12 h-12 bg-red-600 rounded-full 
        ${activeLight === 'green' ? 'bg-green-600' : 'bg-gray-400'} `}></div>
      </div>
    </div>
  )
}

export default TrafficLights