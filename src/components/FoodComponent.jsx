import React from 'react'
import { useState } from 'react'
import { data } from './data'

export default function FoodComponent() {
    const [foods, setFoods] = useState(data);

    const filterType = (category) => {
        setFoods(
            data.filter((item) => {
                return item.category === category;
        }))
    }

    const filterPrice = () => {
        setFoods(
            data.filter((item) => {
                return item.price=== 'price';

        }))
    }

    return (
        <div className='max-w-[1640px] mx-auto px-4 py-12'>
            <h1 className='text-red-600 font-bold text-4xl text-center py-4'>Top Rated Menu Items</h1>
            <div>
                <p>Filter Type</p>
                <div>
                    <button onClick={()=>setFoods(data)}
                    className='m-1 bg-transparent border border-red-600 hover:bg-red-600 px-1 hover:text-white rounded'>
                        All
                    </button  >
                    <button onClick={()=>filterType('burger')}
                    className='m-1 bg-transparent border border-red-600 hover:bg-red-600 px-1 hover:text-white rounded'>
                        Burger
                    </button>
                    <button onClick={()=>filterType('pizza')}
                    className='m-1 bg-transparent border border-red-600 hover:bg-red-600 px-1 hover:text-white rounded'>
                        Pizza
                    </button>
                    <button onClick={()=>filterType('salad')}
                    className='m-1 bg-transparent border border-red-600 hover:bg-red-600 px-1 hover:text-white rounded'>
                        Salad
                    </button>
                    <button onClick={()=>filterType('chicken')}
                    className='m-1 bg-transparent border border-red-600 hover:bg-red-600 px-1 hover:text-white rounded'>
                        Chicken
                    </button>
                    
                </div>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 w-full gap-6 py-6 '>
                {foods.map((item,index)=>{
                    return(

                    <div key={index} className=' flex justify-items-left p-2 transition-transform transform hover:scale-105 focus:scale-105'>
                        <div className='bg-white-200  border border-black-300 rounded-lg '>
                            <img className='w-64 h-64 rounded-tl rounded-tr 'src={item.image} alt='' />
                            <div className='flex justify-between p-1'>
                                <p className='font-bold'>{item.name}</p>
                                <p className='bg-red-600  text-white rounded'>{item.price}</p>
                             </div>
                        </div>
                    </div>
                
                    )
                })}
            </div>
        </div>
    )
}
