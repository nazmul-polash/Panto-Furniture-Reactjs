import react from "react";
import { products } from "../../utils/products";
import ProductCard from "./ProductCard";

const Product = ({ headLine }) => {
   const categories = ['Chair','Beds','Sofas','Lamp'];
   return (
      <>
         <div className="container max-w-screen-2xl mx-auto py-6 px-4">
            <h2 className="text-4xl font-bold text-center my-8">{headLine}</h2>
            <div className="bg-[#EEEEEE] max-w-md mx-auto sm:rounded-full md:p-2.5 py-5 mb-16">

               <div className="flex flex-col sm:flex-row md:justify-between justify-center items-center gap-4 sm:gap-6">
                  {
                     categories.map((category, index) => (
                        <button key={index} className={`py-1.5 sm:px-5 rounded-full hover:bg-orange-400 hover:text-white transition-color`}>{ category}</button>
                     ))
}
               </div>
            </div>
            {/* product grid  */}
               <div>
                  {
                     products.map((product, index) => (
                        <ProductCard key={index} product={product} />

                     ))
                  }
               </div>
         </div>
      </>
   );
};
export default Product;
