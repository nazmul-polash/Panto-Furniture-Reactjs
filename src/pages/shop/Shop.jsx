import React from "react";
import heroImage from "../../assets/banner.png";
import Product from "./Product";

const Shop = () => {
   return (
      <section className="min-h-screen ">
         <div
            className="w-full h-[400px] bg-cover bg-center flex items-center justify-center text-white"
            style={{ backgroundImage: `url(${heroImage})` }}
         >
            <h1 className="text-4xl font-bold">Shop our products</h1>
         </div>
         <Product headLine="Whats your Choice" />
      </section>
   );
};
export default Shop;
