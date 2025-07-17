import React from "react";
import Navbar from "../../components/Navbar";
import heroImage from "../../assets/banner.png";
import { products } from "../../utils/products";
import ProductCard from "../shop/ProductCard";

const Furniture = () => {
   return (
      <section className="min-h-screen ">
         <div
            className="w-full h-[400px] bg-cover bg-center flex items-center justify-center text-white"
            style={{ backgroundImage: `url(${heroImage})` }}
         >
            <h1 className="text-4xl font-bold">Choose Yor Best Furniture</h1>
         </div>
         <div className="container max-w-screen-2xl mx-auto py-6 px-4">
            <h2 className="text-4xl font-bold text-center my-8">All Furnitures</h2>
            {/* product grid  */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
               {products
                  .slice(0,20)
                  .map((product, index) => (
                     <ProductCard key={index} product={product} />
                  ))}
            </div>
            {/* {visibleProducts < filteredProducts.length && (
               <div className="flex justify-center items-center py-8">
                  <button onClick={loadMoreProducts} className="text-sm text-orange-400 flex item-center gap-2">
                     Load More
                     <img src={btnIcon} alt="btn-icon" />
                  </button>
               </div>
            )} */}
         </div>

      </section>
   );
};
export default Furniture;
