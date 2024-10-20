import React from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';


const GsapTo = () => {
  useGSAP(() =>
  {
    gsap.to('.blue-box', {
      x: 320,
      repeat: -1,
      yoyo: true,
      duration: 2,
      rotation: 360,
      ease:'elastic'
    }),
      gsap.to('.green-box', {
        x: 460,
        repeat: -1,
        yoyo: true,
        duration: 2,
        rotation: 360,
        ease:'expo'
      })
  }, [])
    
  return (
    <div className='w-full min-h-screen bg-slate-900 text-white'>
      <div className="inner-div w-full md:h-[50vh]  ">

        <h1 className='text-center text-4xl font-bold py-4'>-: GsapTo :-</h1>


        <p className='px-12 mt-5 text-center text-2xl'>The
          <span className='text-red-600 px-1 font-bold underline text-center'>
            gsap.to()
          </span>
          method is used to animate elements from their current state to a new state.</p>


        <p className=' mt-5 px-24 text-2xl text-center'>The <span className='text-red-600 px-1 font-bold underline text-center'>
          gsap.to()
        </span> method is similar to the  <span className='text-red-600 px-1 font-bold underline text-center'>
            gsap.from()
          </span> method, but the difference is that the <span className='text-red-600 px-2 font-bold underline text-center'>
            gsap.to()
          </span> method animates elements from their current state tro a new state , while the <span className='text-red-600 px-1 font-bold underline text-center'>
            gsap.from()
          </span>  method animates elements from a new state to their current state.</p>

      </div>
      <div className="box1 mt-34 px-3">
        <div className="blue-box h-20 w-20 bg-blue-500 rounded-lg"></div>
      </div>
      <div className="box2 mt-6">
        <div className="green-box h-20 w-20 rounded-lg bg-green-600"></div>
      </div>
    </div>
  )
}

export default GsapTo