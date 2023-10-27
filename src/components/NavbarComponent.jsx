import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai'
import { BsFillCartFill, BsFillSaveFill } from 'react-icons/bs'
import { TbTruckDelivery } from 'react-icons/tb'
import { MdFavorite, MdHelp } from 'react-icons/md'
import { FaUserFriends, FaWallet } from 'react-icons/fa'
import { AiFillTag } from 'react-icons/ai'

export default function NavbarComponent() {
  const [nav, setNav] = useState(false);
  return (


    <div className='max-w[1640px] mx-auto flex justify-between items-center p-4'>
      {/* left navigation*/}
      <div   onClick={() => setNav(!nav)} className='cursor-pointer flex items-center'>
        <AiOutlineMenu size={30} />
        <h1 class="text-2xl sm:text-3xl lg:text-4xl px-2">
          Food<span class="font-bold">Eats</span>
        </h1>
        <div className=' hidden lg:flex items-center bg-gray-200 rounded-full px-1 text-[14px]'>
          <p className='bg-black text-white rounded-full p-2'>Delivery</p>
          <p className='p-2'>pickup</p>
        </div>
      </div>


      {/* search input*/}
      <div className='bg-gray-200 rounded-full flex item-center px-2 py-2 w-[200px] sm:w-[300px] lg:w-[450px] '>
        <AiOutlineSearch />
        <input className='bg-transparent  w-full focus:outline-none' />
      </div>

      {/* cart button */}
      <button
        className='bg-black  text-white hidden md:flex item-center px-3 py-2 rounded-full'>
        <BsFillCartFill size={20} className='mr-2' />
        cart
      </button>

      {/* mobile menu */}
      {/*overlays */}
      {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div>: ''}
      <div className={nav?'fixed top-0 left-0 w={300px} h-screen bg-white z-10 duration-300' :'hidden'}>

        <AiOutlineClose size={30} onClick={() => setNav(!nav)} className='absolute right-4 top-4 cursor-pointer' />
        <h2 className='text-2xl p-4'>
          Food<span>Eats</span>
        </h2>
        <nav>
          <ul>
            <li className='text-xl py-4 flex'><TbTruckDelivery size={25} className='mr-4' />Orders</li>
            <li className='text-xl py-4 flex'><MdFavorite size={25} className='mr-4' /> Favourites</li>
            <li className='text-xl py-4 flex'><FaWallet size={25} className='mr-4' />Wallet </li>
            <li className='text-xl py-4 flex'><MdHelp size={25} className='mr-4' />Help</li>
            <li className='text-xl py-4 flex'><AiFillTag size={25} className='mr-4' />Pramotion</li>
            <li className='text-xl py-4 flex'><BsFillSaveFill size={25} className='mr-4' />Best Ones</li>
            <li className='text-xl py-4 flex'><FaUserFriends size={25} className='mr-4' />Invite a Friend</li>
          </ul>

        </nav>
      </div>
    </div>


  )
}
