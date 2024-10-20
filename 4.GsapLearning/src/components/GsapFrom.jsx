import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const GsapFrom = () => {
  useGSAP(() =>
  {
    gsap.from('.blue-box', {
      y: -200,
      repeat: -1,
      yoyo: true,
      duration: 2,
      rotation: 360,
      ease:'bounce.in'
    }),gsap.from('.green-box', {
      y: -190,
      x: 340,
      repeat: -1,
      yoyo: true,
      duration: 2,
      rotation: 360,
      ease:'spin'
    })
  },[])
  return (
    <div className='w-full min-h-screen bg-slate-900 text-white'>
      <div className="inner-div w-full md:h-[50vh]  ">

        <h1 className='text-center text-4xl font-bold py-4'>-: GsapFrom :-</h1>

        <p className='px-12 mt-5 text-center text-2xl'>The
          <span className='text-red-600 px-1 font-bold underline text-center'>
            gsap.from()
          </span>
          method is used to animate elements from new state to their current state.</p>


          <p className=' mt-5 px-24 text-2xl text-center'>The <span className='text-red-600 px-1 font-bold underline text-center'>
            gsap.from()
          </span> method is similar to the  <span className='text-red-600 px-1 font-bold underline text-center'>
            gsap.to()
          </span> method, but the difference is that the <span className='text-red-600 px-2 font-bold underline text-center'>
            gsap.from()
          </span> method animates elements from new state to their current state , while the <span className='text-red-600 px-1 font-bold underline text-center'>
            gsap.to()</span>  method animates elements from their current state to new state.</p>

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

export default GsapFrom