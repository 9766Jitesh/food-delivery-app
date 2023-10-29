import React from 'react'

export default function HeroComponent() {
  return (
    <div className=' max-w-[1640px] mx-auto p-4'>
      <div className='max-h-[500px] relative left-0 top-0'>
        <div className=' w-full absolute h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-start'>
          <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>
            The <span className='text-red-500 '>Best</span>
          </h1> 
          <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>
            <span className='text-red-500' >Foods</span>  Delivered
          </h1>
        </div>
          <img  className='w-full max-h-[500px] object-cover ' src="https://images.pexels.com/photos/13985154/pexels-photo-13985154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      </div>
    </div>
  )
}
