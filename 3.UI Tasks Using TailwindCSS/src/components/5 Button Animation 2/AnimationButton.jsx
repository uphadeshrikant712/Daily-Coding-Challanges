import React from 'react'

const AnimationButton = () => {
  return (
    <div className='w-full bg-teal-900 h-screen flex items-center justify-center'>

      <div className="buttons w-full h-[520px] bg-white">

        <div className="button1">
          <button className='group inline-block overflow-hidden relative w-full h-[130px]'>
            <span className='z-10 relative uppercase font-mono tracking-widest'>One</span>
            <span className='w-full absolute duration-300 ease-in-out transition-transform bg-blue-500 inset-0 scale-x-0 group-hover:scale-x-100'></span>
          </button>
        </div>
        <div className="button1">
          <button className='w-full h-[130px] border-t border-black relative group'>
            <span className='relative z-10 font-mono tracking-widest uppercase'>Two</span>
            <span className='absolute bg-rose-500 inset-0 scale-x-100 group-hover:scale-x-0 ease-in duration-300 transition-transform'></span>
          </button>
        </div>
        <div className="button1">
          <button className='group relative overflow-hidden inline-block w-full h-[130px] border-t border-black'>
            <span className='z-10 relative font-mono tracking-widest uppercase'>Three</span>
            <span className='absolute inset-0 bg-indigo-500 scale-0 group-hover:scale-100 ease-in duration-300 transition-transform'></span>
          </button>
        </div>

        <div className="button4">
          <button className='w-full h-[130px] border-t border-black group relative inline-block overflow-hidden'>
            <span className='z-10 font-mono relative uppercase tracking-widest'>Four</span>
            <span className='absolute inset-0 bg-cyan-900 scale-100 group-hover:scale-0 duration-300 ease-in'></span>
          </button>
        </div>
        
      </div>
    </div>
  )
}

export default AnimationButton