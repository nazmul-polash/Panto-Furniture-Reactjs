import React from 'react'
import { getImgUrl } from '../../utils/getImgUrl'
import Rating from '../../components/Rating'
import { FiPlus } from "react-icons/fi";

const ProductCard = ({ product }) => {
   return (
      <div className='flex flex-col h-full bg-white shadow-md rounded-lg overflow-hidden'>
         <div className="flex items-center justify-center bg-[#8f8e91fb] h-48">
            <img src={getImgUrl(`${product.image}`)} alt="" className="object-contain h-40 w-40"/>
         </div>
         <div className="p-4 bg-white shadow-md">
            <h4 className='text-base mb-1'>{product.category}</h4>
            <h3 className='font-semibold text-xl mb-2'>{product.name}</h3>
            <Rating rating={product.rating} />
            <div className='mt-5 flex justify-between items-center'>
               <p className='font-bold text-lg'><sup>$ <span>{product.price}</span></sup></p>
               <button className='bg-orange-400 text-white p-2 rounded-full hover:bg-orange-500 transition-colors'><FiPlus /></button>
            </div>
         </div>
      </div>
   )
}
export default ProductCard