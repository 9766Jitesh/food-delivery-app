import React, { useState } from 'react'
import{AiOutlineMenu, AiOutlineSearch} from 'react-icons/ai'

export default function NavbarComponent() {
    const [nav,setNav]=useState(false);
  return (
    

    <div className='max-w[1640px] mx-auto flex justify-between items-center p-4'>
{/* left navigation*/}
    <div onClick={()=>setNav(!nav)} className='cursor-pointer flex items-center'>
      <AiOutlineMenu  size={30}/>
      <h1 class="text-2xl sm:text-3xl lg:text-4xl px-2">
      Food<span class="font-bold">Eats</span>
    </h1>
    <div className=' hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
      <p className='bg-black text-white rounded-full p-2'>Delivery</p>
      <p className='p-2'>pickup</p>
    </div>
    </div>

    
    {/* search input*/}
    <div className='bg-gray-200 rounded-full flex item-center px-2 py-2 w-[200px] sm:w-[300px] lg:w-[450px] '>
      <AiOutlineSearch size={25}/>
      <input className='bg-transparent  w-full focus:outline-none'/>
    </div>

    {/*  */}
    </div>
    
    
  )
}
