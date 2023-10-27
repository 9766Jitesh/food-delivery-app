import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai'
import { BsFillCartFill } from 'react-icons/bs'
import {TbTruckDelivery} from 'react-icons/tb'
import {MdFavorite, MdHelp} from 'react-icons/md'
import {FaUserFriends, FaWallet} from 'react-icons/fa'

export default function NavbarComponent() {
  const [nav, setNav] = useState(false);
  return (


    <div className='max-w[1640px] mx-auto flex justify-between items-center p-4'>
      {/* left navigation*/}
      <div onClick={() => setNav(!nav)} className='cursor-pointer flex items-center'>
        <AiOutlineMenu size={30} />
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
        <AiOutlineSearch size={25} />
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

      <AiOutlineClose size={30} onClick={() => setNav(!nav)} className='absolute right-4 top-4 cursor-pointer' />
      <h2 className='text-2xl p-4'>
        Food<span>Eats</span>
      </h2>
      <nav>
        <ul>

          <li>
              <TbTruckDelivery size={25} className='mr-4'/>
            Orders
          </li>

          <li>
              <MdFavorite  size={25} className='mr-4'/>
            Favourites
          </li>

          <li>
            <FaWallet size={25} className='mr-4'/>
            Wallet
          </li>

          <li>
            <MdHelp size={25} className='mr-4'/>
            Help
          </li>

          <li>Pramotion</li>
          <li>Best Ones</li>
          <li>
            <FaUserFriends size={25} className='mr-4'  />
            Invite a Friend
            </li>

        </ul>

      </nav>
    </div>


  )
}
