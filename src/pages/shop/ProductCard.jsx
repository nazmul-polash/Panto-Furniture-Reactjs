import React from 'react'

const ProductCard = ({ product }) => {
   return (
      <div className="border p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
         <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded" />
         <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
         <p className="text-gray-600 mb-2">{product.description}</p>
         <span className="text-lg font-bold text-orange-500">${product.price}</span>
      </div>
   )
}
export default ProductCard