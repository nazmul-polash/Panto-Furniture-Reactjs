import react from "react";
import { useState } from "react";
import { products } from "../../utils/products";
import ProductCard from "./ProductCard";
import btnIcon from "../../assets/button-icon.png";

const Product = ({ headLine }) => {
   const categories = ["Chair", "Beds", "Sofas", "Lamp"];
   const [selectedCategory, setSelsectedCategory] = useState(categories[0]);
   const filteredProducts = products.filter(
      (product) => product.category === selectedCategory
   );
   // Show only 4 products initially
   const [visibleProducts, setVisibleProducts] = useState(4);
   const loadMoreProducts = () => {
      setVisibleProducts((prev) => prev + 4);
   };

   return (
      <>
         <div className="container max-w-screen-2xl mx-auto py-6 px-4">
            <h2 className="text-4xl font-bold text-center my-8">{headLine}</h2>
            <div className="bg-[#EEEEEE] max-w-md mx-auto sm:rounded-full md:p-2.5 py-5 mb-16">
               <div className="flex flex-col sm:flex-row md:justify-between justify-center items-center gap-4 sm:gap-6">
                  {categories.map((category, index) => (
                     <button
                        onClick={() => {
                           setSelsectedCategory(category);
                           setVisibleProducts(4);
                        }}
                        key={index}
                        className={`py-1.5 sm:px-5 rounded-full hover:bg-orange-400 hover:text-white transition-color 
                           ${
                              selectedCategory === category
                                 ? "bg-white text-orange-400"
                                 : ""
                           }`}
                     >
                        {category}
                     </button>
                  ))}
               </div>
            </div>
            {/* product grid  */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
               {filteredProducts
                  .slice(0, visibleProducts)
                  .map((product, index) => (
                     <ProductCard key={index} product={product} />
                  ))}
            </div>
            {visibleProducts < filteredProducts.length && (
               <div className="flex justify-center items-center py-8">
                  <button onClick={loadMoreProducts} className="text-sm text-orange-400 flex item-center gap-2">
                     Load More
                     <img src={btnIcon} alt="btn-icon" />
                  </button>
               </div>
            )}
         </div>
      </>
   );
};
export default Product;
