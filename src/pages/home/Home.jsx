import React from "react";
import Hero from "./Hero.jsx";
import WhyChoose from "./WhyChoose.jsx";
import Product from "../shop/Product.jsx";

const Home = () => {
   return (
      <>
         <div>
            <Hero />
            <WhyChoose />
            <Product headLine="Best Selling Product" />
         </div>
      </>
   );
};

export default Home;
