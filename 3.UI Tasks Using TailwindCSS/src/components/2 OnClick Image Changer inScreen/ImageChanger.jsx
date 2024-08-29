import React, { useState } from 'react'

const ImageChanger = () => {
  const [active, setActive] = useState('first');
  const handleClick = (option) => {
    setActive(option);
  }
  return (
    <div className='h-screen w-full bg-gray-800 flex justify-between'>

      <div className="img bg-green-100 w-[90vw] h-[95vh] flex">

        <div className="left w-[120px] h-full bg-red-300 px-5 py-4 space-y-8">

          <div onClick={() => handleClick('first')} className="imag1 cursor-pointer w-20 h-24 bg-green-300">
            <img src="./1.jpeg" alt="" />
          </div>

          <div onClick={() => handleClick('second')} className="imag2 cursor-pointer w-20 h-24 bg-green-300">
            <img src="./2.jpeg" alt="" />
          </div>

          <div onClick={() => handleClick('third')} className="imag3 cursor-pointer w-20 h-24 bg-green-300">
            <img src="./3.jpeg" alt="" />
          </div>

          <div onClick={() => handleClick('fourth')} className="imag4 cursor-pointer w-20 h-24 bg-green-300">
            <img src="./4.jpeg" alt="" />
          </div>
        </div>


        <div className="right bg-gray-100 w-[440px] h-full flex items-center justify-center">

          <div className="img w-[320px] h-[350px] bg-indigo-400">
            <img
              className='w-full h-full object-cover'
              src={
                active === 'first' ? './1.jpeg'
                  : active === 'second' ? './2.jpeg'
                    : active === 'third' ? './3.jpeg'
                      : './4.jpeg'
              }
              alt="Selected" />
          </div>
        </div>

        <div className="flex items-center justify-center px-[4vw] flex-col gap-4 text-center">
          <h1 className='text-3xl font-semibold'>
            Image Selector on Click
          </h1>
          <p>when you click on left side any image out of 4 then it gets appeared on ful screen</p>
        </div>
      </div>
    </div>
  )
}

export default ImageChanger