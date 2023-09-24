import React from 'react'
import { productionHouseList } from '../constants'





const ProductionHouse = () => {
  return (
    <div className='w-full h-full flex gap-3 md:gap-5 p-2 px-5 md:px-16' >
        {productionHouseList.map((item) => (
            <div className=" border-2 group border-gray-600 rounded-lg shadow-xl shadow-black hover:scale-110 transition-all duration-300 easy-in-out cursor-pointer items-center flex">
                <video src={item.video} autoPlay loop playsInline muted 
            className=' rounded-md 
            opacity-0 group-hover:opacity-50'/> 
                <img src={item.image} className=' absolute z-1 opacity-100 w-[50px] md:w-[100px] lg:w-[150px] mx-auto ' /> 
            </div>
        ))}
    </div>
  )
  }
export default ProductionHouse