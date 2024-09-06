import React from 'react'

const ButtonAnimation = () => {
  return (
    <div className='w-full h-screen bg-red-400 flex items-center justify-center'>

      <div className="3-buttons w-full h-[60vh] bg-green-400 flex flex-col">
        
        <button className='group relative inline-block overflow-hidden w-full bg-black text-white h-[120px]'>
          <span className='relative z-10 font-mono uppercase tracking-widest text-2xl '>one</span>
          <span className='w-full absolute inset-0 bg-blue-500 scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-in '></span>
        </button>

        <button className='group relative w-full bg-black text-white border-t h-[120px]'><span className='relative z-10 font-mono uppercase tracking-widest text-2xl'>two</span>
          <span className='absolute bg-blue-500 inset-0 group-hover:scale-y-100 scale-y-0 ease-in-out duration-500 transition-transform'></span></button>
        
        <button className='group relative inline-block overflow-hidden w-full bg-black text-white border-t h-[120px]'>
          <span className='z-10 relative font-mono uppercase tracking-widest text-2xl'>three</span>
          <span className='bg-blue-500 absolute inset-0 scale-y-0 group-hover:scale-y-100 duration-500 ease-in transition-transform'></span>
        </button>
      </div>
    </div>
  )
}

export default ButtonAnimation