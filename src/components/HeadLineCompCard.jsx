import React from 'react'

export default function HeadLineCompCard() {
  return (
    
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-4 gap-4'>
      <div className='rouned-xl relative '>
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
            <p className='font-bold text-2xl px-2 pt-4'>Breakfast Adda</p>
            <p className='px-2'> Through 8/28</p>
            <buttom className="border-white bg-white text-black mx-2 p-0.5 absolute bottom-4 rounded-[5px] ">Order Now</buttom>
        </div>
        <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/14415378/pexels-photo-14415378.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt=""/>
      </div>
      <div className='rouned-xl relative '>
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
            <p className='font-bold text-2xl px-2 pt-4'>Food-Maniya</p>
            <p className='px-2'> we serve love</p>
            <buttom className="border-white bg-white text-black mx-2 p-0.5 absolute bottom-4 rounded-[5px] ">Order Now</buttom>
        </div>
        <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/2119758/pexels-photo-2119758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
      </div>
      <div className='rouned-xl relative '>
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
            <p className='font-bold text-2xl px-2 pt-4'>Desert resto</p>
            <p className='px-2'>kuch mith ho jaye</p>
            <buttom className="border-white bg-white text-black mx-2 p-0.5 absolute bottom-4 rounded-[5px] ">Order Now</buttom>
        </div>
        <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/3026810/pexels-photo-3026810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
      </div>
      <div className='rouned-xl relative '>
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
            <p className='font-bold text-2xl px-2 pt-4'>Indian</p>
            <p className='px-2'>Its all about thali</p>
            <buttom className="border-white bg-white text-black mx-2 p-0.5 absolute bottom-4 rounded-[5px] ">Order Now</buttom>
        </div>
        <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/9792458/pexels-photo-9792458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
      </div>
    </div>
    
        
  )
}
