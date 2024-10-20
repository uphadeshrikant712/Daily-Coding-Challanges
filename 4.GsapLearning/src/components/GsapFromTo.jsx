import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const GsapFromTo = () => {
  useGSAP(() =>
  {
    gsap.fromTo('.blue-box',
      {
        x: 0,
        rotation: 0,
       borderRadius:'0%'
      },
      {
        x: 420,
        repeat: -1,
        yoyo:true,
        rotation: 360,
        borderRadius: '100%',
        duration: 2,
        ease:'bounce.out'
      }
    ),
      gsap.fromTo('.green-box', {
        x: 2,
        rotation: 0,
        borderRadius:'0%'
      }, {
        x: 550,
        repeat: -1,
        yoyo: true,
        rotation: 360,
        duration: 2,
        ease: 'bounce.in',
        borderRadius:'100%'
      })
  },[])
  return (
    
    <div className='w-full min-h-screen bg-slate-900 text-white'>
      <div className="inner-div w-full md:h-[50vh]  ">

        <h1 className='text-center text-4xl font-bold py-4'>-: GsapFromTo :-</h1>


        <p className='px-12 mt-5 text-center text-2xl'>The
          <span className='text-red-600 px-1 font-bold underline text-center'>
            gsap.fromTo()
          </span>
          method is used to animate elements to new state to a new state.</p>


        <p className=' mt-5 px-24 text-2xl text-center'>The <span className='text-red-600 px-1 font-bold underline text-center'>
          gsap.fromTo()
        </span> method is similar to the  <span className='text-red-600 px-1 font-bold underline text-center'>
            gsap.from()
          </span> and  <span className='text-red-600 px-1 font-bold underline text-center'>
            gsap.to()
          </span> method, but the difference is that the <span className='text-red-600 px-2 font-bold underline text-center'>
            gsap.fromTo()
          </span> method animates elements from new state to a new state, while the <span className='text-red-600 px-1 font-bold underline text-center'>
            gsap.from()
          </span>  method animates elements from a new state to their current state.
        and the  <span className='text-red-600 px-1 font-bold underline text-center'>
            gsap.to()
          </span> method animates elements from their cu  rrent state to a new state.
        </p>

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

export default GsapFromTo